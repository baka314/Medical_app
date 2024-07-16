const Router = require('express')
const router = new Router()

const doctorDiaryRouter = require('./doctorDiaryRouter')
const doctorRouter = require('./doctorRouter')

const consultationRouter = require('./consultationRouter')
const patientRouter = require('./patientRouter')
const patientDiaryRouter = require('./patientDiaryRouter')
const recordRouter = require('./recordRouter')

    router.use('/doctor', doctorRouter),
    router.use('/patient', patientRouter),

    router.use('/consultation', consultationRouter),
    router.use('/record', recordRouter),
    router.use('/patientDiary', patientDiaryRouter),
    router.use('/doctorDiary', doctorDiaryRouter),


module.exports = router