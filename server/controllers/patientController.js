const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Patient } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class PatientController {
    async registration(req, res, next) {
        const { email, password, nameSurname, mainDiagnosis, sex, homeAddress, dateOfBirth, mobileNumber } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'));
        }
        const candidate = await Patient.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Patient with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const patient = await Patient.create({ email, password: hashPassword, nameSurname, mainDiagnosis, sex, homeAddress, dateOfBirth, mobileNumber });
        const token = generateJwt(patient.id, patient.email, 'patient');
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const patient = await Patient.findOne({ where: { email } });
        if (!patient) {
            return next(ApiError.internal('Patient not found'));
        }
        let comparePassword = bcrypt.compareSync(password, patient.password);
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password'));
        }
        const token = generateJwt(patient.id, patient.email, 'patient');
        return res.json({ token });
    }

    async check(req, res, next) {
        const token = generateJwt(req.patient.id, req.patient.email, 'patient');
        return res.json({ token });
    }
}

module.exports = new PatientController();
