import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, navLinkName, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<li
			id={navLinkId}
			className={`menu-item`+` `+`${activeNavLinkId === navLinkId ? 'activeClass' : ''}`}
			onClick={handleClick}
		>
			{navLinkName}
		</li>
	);
};

export default NavLink;