import React from "react";
import "./styles/Authorization.css";

const PatientAuthorization = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Авторизація у кабінеті пацієнта</h2>
                <form className="auth-form">
                    <div className="form-group">
                        <label>Введіть email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label>Введіть пароль</label>
                        <input type="password" />
                    </div>
                    <div className="form-buttons">
                        <button type="button">Відмінити</button>
                        <button type="submit">Увійти</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default PatientAuthorization;