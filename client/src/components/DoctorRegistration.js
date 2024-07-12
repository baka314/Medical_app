import React from 'react';
import './styles/DoctorRegistration.css';

const DoctorRegistration = () => {
    return (
        <div className="registration-page">
            <div className="registration-container">
                <h2>Реєстрація у кабінеті лікаря</h2>
                <form className="registration-form">
                    <div className="form-group">
                        <label>Введіть прізвище, ім’я, по-батькові</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Введіть вашу спеціалізацію</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Введіть email</label>
                        <input type="email"/>
                    </div>

                    <div className="form-group" id='department'>
                        <label>Обeріть відділення</label>
                        <select>
                            <option value="">натисніть, щоб обрати:</option>

                            <option style={{color: 'navy'}} value="">Приймальне відділення</option>
                            <option style={{color: 'navy'}} value="">Операційний блок цілодобової допомоги</option>

                            <option style={{color: 'darkred'}} value="">Загальна хірургія</option>
                            <option style={{color: 'darkred'}} value="">Судинна хірургія</option>
                            <option style={{color: 'darkred'}} value="">Нейрохірургія</option>
                            <option style={{color: 'darkred'}} value="">Анестезіологія</option>
                            <option style={{color: 'darkred'}} value="">Кардіохірургія</option>
                            <option style={{color: 'darkred'}} value="">Інтенсивна терапія загального профілю</option>
                            <option style={{color: 'darkred'}} value="">Інтенсивна терапія екстракорпоральних методів
                            </option>
                            <option style={{color: 'darkred'}} value="">Інтенсивна терапія з судинно-мозковою
                                недостатністю
                            </option>
                            <option style={{color: 'darkred'}} value="">Інтервенційна серцево-судинна радіологія
                            </option>
                            <option style={{color: 'darkred'}} value="">Інвазивні методи діагностики та лікування
                            </option>
                            <option style={{color: 'darkred'}} value="">Гінекологія</option>
                            <option style={{color: 'darkred'}} value="">Отоларингологія</option>
                            <option style={{color: 'darkred'}} value="">Офтальмологія</option>
                            <option style={{color: 'darkred'}} value="">Урологія</option>
                            <option style={{color: 'darkred'}} value="">Торакальна хірургія</option>
                            <option style={{color: 'darkred'}} value="">Травматолого-ортопедія</option>
                            <option style={{color: 'darkred'}} value="">Трансплатація нирок та діаліза</option>

                            <option style={{color: 'darkgreen'}} value="">Гематологія</option>
                            <option style={{color: 'darkgreen'}} value="">Нефрологія</option>
                            <option style={{color: 'darkgreen'}} value="">Пульмонологія</option>
                            <option style={{color: 'darkgreen'}} value="">Ендокринологія</option>
                            <option style={{color: 'darkgreen'}} value="">Неврологія</option>
                            <option style={{color: 'darkgreen'}} value="">Кардіологія</option>
                            <option style={{color: 'darkgreen'}} value="">Фізіотерапія</option>
                            <option style={{color: 'darkgreen'}} value="">Трансфузіологія</option>

                            <option style={{color: 'darkmagenta'}} value="">Клініко-діагностична лабораторія</option>
                            <option style={{color: 'darkmagenta'}} value="">Ренгенодіагностика</option>
                            <option style={{color: 'darkmagenta'}} value="">Функціональна та ультрозвукова діагностика
                            </option>
                            <option style={{color: 'darkmagenta'}} value="">Радіонуклідна діагностика</option>
                            <option style={{color: 'darkmagenta'}} value="">Променева терапія</option>

                            <option style={{color: 'grey'}} value="">Відділення новонароджених</option>
                            <option style={{color: 'grey'}} value="">Центр планування та репродукції (т.ч. МГК)</option>
                            <option style={{color: 'grey'}} value="">Патологія новонароджених</option>
                            <option style={{color: 'grey'}} value="">Еккстрагенітальні патології</option>
                            <option style={{color: 'grey'}} value="">Патології вагітності</option>
                            <option style={{color: 'grey'}} value="">Акушерське відділення</option>
                            <option style={{color: 'grey'}} value="">Пологово-операційне відділення</option>
                            <option style={{color: 'grey'}} value="">Планова/екстрена акушерсько-гінекологічна
                                допомога
                            </option>
                            <option style={{color: 'grey'}} value="">Інтенсивна терапія новонароджених</option>
                            <option style={{color: 'grey'}} value="">Інтенсивна терапія вагітних/породіль</option>

                            <option style={{color: 'black'}} value="">Поліклініка</option>


                        </select>
                    </div>
                    <div className="form-group">
                        <label>Введіть номер телефону</label>
                        <input type="text"/>
                    </div>

                    <div className="form-group">
                        <label>Введіть назву закладу роботи</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Створіть пароль</label>
                        <input type="password"/>
                    </div>

                    <div className="form-group">
                        <label>Підтвердіть пароль</label>
                        <input type="password"/>
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

export default DoctorRegistration;
