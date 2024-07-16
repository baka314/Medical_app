import {
    DOCTOR_DIARY_ROUTE,
    LOGIN_DOCTOR_ROUTE,
    LOGIN_PATIENT_ROUTE, PATIENT_DIARY_ROUTE,
    REGISTRATION_DOCTOR_ROUTE,
    REGISTRATION_PATIENT_ROUTE,
    START_PAGE_ROUTE
} from "./utils/consts";

import DoctorRegistration from "./components/DoctorRegistration";
import MainContent from "./components/MainContent";
import PatientRegistration from "./components/PatientRegistration";
import PatientAuthorization from "./components/PatientAuthorization";
import DoctorAuthorization from "./components/DoctorAuthorization";
import DoctorDiary from "./components/DoctorDiary";
import PatientDiary from "./components/PatientDiary";





export const authRoutes = [
    {
     path:DOCTOR_DIARY_ROUTE,
        Component: DoctorDiary
    },
    {
        path:PATIENT_DIARY_ROUTE,
        Component: PatientDiary
    },
]

export const publicRoutes = [
    {
        path: START_PAGE_ROUTE,
        Component: MainContent
    },
    {
        path: REGISTRATION_DOCTOR_ROUTE,
        Component: DoctorRegistration
    },
    {
        path: REGISTRATION_PATIENT_ROUTE,
        Component: PatientRegistration
    },
    {
        path: LOGIN_PATIENT_ROUTE,
        Component: PatientAuthorization
    },
    {
        path: LOGIN_DOCTOR_ROUTE,
        Component: DoctorAuthorization
    }
]
