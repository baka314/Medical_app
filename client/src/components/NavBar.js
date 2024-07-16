import React from 'react';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {
    const navigate = useNavigate();
    const handleMainPage = () => {
    navigate('/');
};
    return (
        <nav className="navbar">

            <img
                src={`${process.env.PUBLIC_URL}/logo.jpg`}
                alt="Logo"/>

            <div className="nav-box">
                <ul className="navbar-links">
                    <li ><a className="currentPage"  href="/" >Головна сторінка</a></li>
                    <li><a href="https://oocl.org.ua/">Про лікарню</a></li>
                    <li><a href="https://oocl.org.ua/?page_id=72">Контакти</a></li>
                    <li><a className="adminLink" href="#">Для адміністратора</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
