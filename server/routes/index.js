const Router = require('express')
const router = new Router()
const departmentRouter = require('./departmentRouter')
const doctorDiaryRouter = require('./doctorDiaryRouter')
const doctorRouter = require('./doctorRouter')
const illnessHistoryRouter = require('./illnessHistoryRouter')
const manipulationRouter = require('./manipulationRouter')
const patientRouter = require('./patientRouter')
const patientDiaryRouter = require('./patientDiaryRouter')
const recordRouter = require('./recordRouter')

    router.use('/doctor', doctorRouter),
    router.use('/patient', patientRouter),
    router.use('/department', departmentRouter),
    router.use('/manipulation', manipulationRouter),
    router.use('/record', recordRouter),
    router.use('/patientDiary', patientDiaryRouter),
    router.use('/doctorDiary', doctorDiaryRouter),
    router.use('/illnessHistory', illnessHistoryRouter)

module.exports = router