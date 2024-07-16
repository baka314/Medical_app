const Router = require('express');
const patientController = require('../controllers/PatientController');
const router = new Router();

router.post('/registration', patientController.registration);
router.post('/login', patientController.login);
router.get('/auth', patientController.check);

module.exports = router;
