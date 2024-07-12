// src/components/MainContent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MainContent.css';

const MainContent = () => {
    const navigate = useNavigate();

    const handleDoctorRegister = () => {
        navigate('/doctor-registration');
    };
    const handleDoctorAuth = () => {
        navigate('/doctor-authorization');
    };
    const handlePatientRegister = () => {
        navigate('/patient-registration');
    };
    const handlePatientAuth = () => {
        navigate('/patient-authorization');
    };


    return (
        <div className="main-content">
            <h1 className="pageTitle">Керуйте своїми записами онлайн в є-кабінеті</h1>
            <div className="cards">
                <div className="card" id="clientCard">
                    <h2>Для пацієнтів</h2>
                    <p>Перейдіть, щоб створити кабінет пацієнта</p>
                    <button className="register-btn"  onClick={handlePatientRegister}>Зареєструватися</button>
                    <p>Вже є акаунт?</p>
                    <button className="login-btn"  onClick={handlePatientAuth}>Увійти</button>
                </div>
                <div className="card" id="doctorCard">
                    <h2>Для лікарів</h2>
                    <p>Перейдіть, щоб створити кабінет спеціаліста</p>
                    <button className="register-btn" onClick={handleDoctorRegister}>Зареєструватися</button>
                    <p>Вже є акаунт?</p>
                    <button className="login-btn"  onClick={handleDoctorAuth}>Увійти</button>
                </div>
            </div></div>)


};

export default MainContent;
