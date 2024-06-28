import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h1 className="pageTitle">Керуйте своїми записами онлайн в є-кабінеті</h1>
            <div className="cards">
                <div className="card" id="clientCard">
                    <h2>Для пацієнтів</h2>
                    <p>Перейдіть, щоб створити кабінет пацієнта</p>
                    <button className="register-btn">Зареєструватися</button>
                    <p>Вже є акаунт?</p>
                    <button className="login-btn">Увійти</button>
                </div>
                <div className="card" id="doctorCard">
                    <h2>Для лікарів</h2>
                    <p>Перейдіть, щоб створити кабінет спеціаліста</p>
                    <button className="register-btn">Зареєструватися</button>
                    <p>Вже є акаунт?</p>
                    <button className="login-btn">Увійти</button>
                </div>
            </div>

        </div>
    );
}

export default MainContent;
