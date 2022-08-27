import React from 'react';

const NavFooterLink = ({ navFooterLinkId, navFooterLinkName, scrollToId }) => {

	const handleClick = () => {
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<li
			id={navFooterLinkId}
			className={`footer-menu-item`}
			onClick={handleClick}
		>
			{navFooterLinkName}
		</li>
	);
};

export default NavFooterLink;