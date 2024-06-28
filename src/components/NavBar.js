import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className="navbar">

            <img
                src="https://oocl.org.ua/wp-content/uploads/2023/03/%D0%BB%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BE%D0%BA%D0%BB-1.png"
                alt="Logo"/>

            <div className="nav-box">
                <ul className="navbar-links">
                    <li ><a className="currentPage" href="#">Створити акаунт</a></li>
                    <li><a href="https://oocl.org.ua/">Про лікарню</a></li>
                    <li><a href="https://oocl.org.ua/?page_id=72">Контакти</a></li>
                    <li><a className="adminLink" href="#">Для адміністратора</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
