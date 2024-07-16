// src/components/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import DoctorRegistration from './DoctorRegistration';
import PatientRegistration from './PatientRegistration';
import DoctorAuthorization from './DoctorAuthorization';
import PatientAuthorization from "./PatientAuthorization";
const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>

                    <Route path="/" element={<MainContent />} />
                    <Route path="/doctor-registration" element={<DoctorRegistration />} />
                    <Route path="/doctor-authorization" element={<DoctorAuthorization />} />
                    <Route path="/patient-registration" element={<PatientRegistration />} />
                    <Route path="/patient-authorization" element={<PatientAuthorization />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default AppRouter;
