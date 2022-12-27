import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (
        <section className='desktop-menu'>
            <div className='logo'>YM</div>
            <ul className='menu-list'>
                {navLinks.map(({ navLinkId, navLinkName, scrollToId }, idx) => (
                    <NavLink key={idx} navLinkId={navLinkId}  navLinkName={navLinkName} scrollToId={scrollToId} />
                ))}
            </ul>
            <Link className="menu-cv-btn btn" to={{ pathname:"https://docs.google.com/document/d/1Ys-bI8Von-JpapqLht0nV9Ws3-vkOHAe5QoyS955IXc/edit?usp=sharing" }} target="_blank">CV DOWNLOAD</Link>
        </section>
	);
};

export default Nav;