import './ContactForm.css';
import PolygonYellow from './PolygonYellow.svg';
import PolygonRed from './PolygonRed.svg';
import { useNav } from '../../customHooks/useNav';


export default function ContactForm() {

    const contactFormRef = useNav('ContactForm');

    const handleClick = () => {
		document.getElementById('portfolioContainer'
        ).scrollIntoView({ behavior: 'smooth' });
	};

    return (
        <div className='contact-form-wrapper' ref={contactFormRef} id='contactFormContainer'>
            <img className='contact-form-polygon-yellow' src={PolygonYellow} alt='Polygon Yellow'></img>
            <div className='contact-form-content-wrapper'>
                <h2 className='contact-form-title' >Contact<br/> If You Have Any Opportunities For Me?</h2>
                <div className='contact-form-description' >Apparently we had reached a great height in the atmosphere</div>
                <div className='contact-form-btns-row' >
                    <a href="tel:972539338926" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><button className="contact-form-red-btn btn" >Call</button></a>
                    
                    <a href="mailto:ysolodukha@gmail.com"> <button className="contact-form-white-btn btn">Mail</button> </a> 
                    
                </div>
                <img className='contact-form-polygon-red' src={PolygonRed} alt='Polygon Red'></img>
            </div>

        </div>
    )
}