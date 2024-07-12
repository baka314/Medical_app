import React from "react";
import "./styles/PatientRegistration.css";

const PatientRegistration = () => {
    return (
        <div className="registration-page">
        <div className="registration-container">
            <h2>Реєстрація у кабінеті пацієнта</h2>
            <form className="registration-form">
                <div className="form-group">
                    <label>Введіть прізвище, ім’я, по-батькові</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Введіть номер телефону</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Введіть email</label>
                    <input type="email" />
                </div>

                <div className="form-group" id='sex'>
                    <label>Оберіть стать</label>
                    <select>
                        <option style={{color: 'navy'}} value="">натисніть, щоб обрати:</option>
                        <option style={{color: 'navy'}} value="">Жіноча</option>
                        <option style={{color: 'navy'}} value="">Чоловіча</option>
                        <input type="text" /></select>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Оберіть дату народження</label>
                    <input style={{color: 'navy'}} type="date" id="dob" name="dob" required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Адреса проживання:</label>
                    <input style={{color: 'navy'}} type="text"  />
                </div>
                <div className="form-group">
                    <label>Створіть пароль</label>
                    <input type="password" />
                </div>
                <div className="form-group">
                    <label>Підтвердіть пароль</label>
                    <input type="password" />
                </div>
                <div className="form-buttons">
                    <button type="button">Відмінити</button>
                    <button type="submit">Створити кабінет</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default PatientRegistration;