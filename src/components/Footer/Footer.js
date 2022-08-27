import './Footer.css';
import { Link } from 'react-router-dom';
import Linkedin from './linkedin.svg'
import GitHub from './github.svg'
import { useNav } from '../../customHooks/useNav';
import NavFooterLink from './navFooterLink';
import { navFooterLinks } from './navFooterLinks';


export default function Footer() {

    const contactsRef = useNav('Contacts');
    return (
        <section className='footer-wrapper' ref={contactsRef} id='contactsContainer'>
            <div className='footer-content-wrapper'>
                <div className='footer-contacts-wrapper' >
                    <div className='footer-logo'>YM</div>
                    <div className='footer-telephone'>
                    <a className='footer-telephone-link' href="tel:972539338926" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p class="call-button">+972 53 9338926</p></a>
                    </div>
                    <div className='footer-mail'>
                    <a className='footer-mail-link' href="mailto:ysolodukha@gmail.com"> ymandrovsky@gmail.com </a> 
                    </div>
                </div>
                <div className='footer-menu-wrapper' >
                    <h3 className='footer-section-subtitle' >menu</h3>
                    <ul className='footer-menu-list'>
                    {navFooterLinks.map(({ navFooterLinkId, navFooterLinkName, scrollToId }, idx) => (
                    <NavFooterLink key={idx} navFooterLinkId={navFooterLinkId} navFooterLinkName={navFooterLinkName} scrollToId={scrollToId} />
                ))}
                    </ul>
                </div>
                <div className='footer-communicate-wrapper' >
                    <h3 className='footer-section-subtitle' >cv download</h3>
                    <Link className="footer-cv-downloader" to={{ pathname: "https://docs.google.com/document/d/1Ys-bI8Von-JpapqLht0nV9Ws3-vkOHAe5QoyS955IXc/edit?usp=sharing" }} target="_blank">Download</Link>
                </div>
            </div>
            <div className='footer-white-line'></div>
            <div className='footer-social-media-wrapper' >
                <div className='footer-social-btn' >
                    <a className='footer-icon-link' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ymandrovsky'>
                        <img className='footer-icon' src={Linkedin} alt='Linkedin'></img>
                    </a>
                </div>
                <div className='footer-social-btn' >
                <a className='footer-icon-link' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky'>
                        <img className='footer-icon' src={GitHub} alt='GitHub'></img>
                    </a>
                </div>
            </div>
        </section>
    )
}