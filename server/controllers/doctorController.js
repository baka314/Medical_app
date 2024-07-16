const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Doctor } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class DoctorController {
    async registration(req, res, next) {
        const { email, password, nameSurname, workPlace, departmentName, departmentId, specialization, mobileNumber } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'));
        }
        const candidate = await Doctor.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Doctor with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const doctor = await Doctor.create({ email, password: hashPassword, nameSurname, workPlace, departmentName, departmentId, specialization, mobileNumber });
        const token = generateJwt(doctor.id, doctor.email, 'doctor');
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const doctor = await Doctor.findOne({ where: { email } });
        if (!doctor) {
            return next(ApiError.internal('Doctor not found'));
        }
        let comparePassword = bcrypt.compareSync(password, doctor.password);
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password'));
        }
        const token = generateJwt(doctor.id, doctor.email, 'doctor');
        return res.json({ token });
    }

    async check(req, res, next) {

        const token = generateJwt(req.doctor.id, req.doctor.email, 'doctor');
        return res.json({ token });
    }
}

module.exports = new DoctorController();
