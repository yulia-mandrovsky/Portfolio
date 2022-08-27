import './Home.css'
import { Link } from 'react-router-dom';
import Background from './Background.png'
import Triangle from './Triangle.png'
import { useNav } from '../../customHooks/useNav';

export default function Home() {

    const homeRef = useNav('Home');

    const handleClick = () => {
		document.getElementById('portfolioContainer'
        ).scrollIntoView({ behavior: 'smooth' });
	};

    return (
        <section className='header-wrapper' ref={homeRef} id='homeContainer' style={{backgroundImage: `url(${Background})`}}>
            
            <div className='header-content-wrapper'>
                <div className='header-description'>
                    <h3 className='header-subtitle'>Personal Portfolio</h3>
                    <h1 className='header-title'>Frontend & <br/>Fullstack Developer</h1>
                    <div className='header-description'>The sky was green booooooonis and of a deep dark biom. The spectacle before us was indeed sublime.</div>
                    <div className='header-btns-row'>
                        <btn className="header-portfolio-btn btn" onClick={handleClick}>Portfolio</btn>
                        <Link className="header-cv-btn btn" to={{ pathname: "https://docs.google.com/document/d/1Ys-bI8Von-JpapqLht0nV9Ws3-vkOHAe5QoyS955IXc/edit?usp=sharing" }} target="_blank">CV</Link>
                    </div>
                </div>
                <div className='header-images'>
                    <div className='header-yellow-square'>
                        <div className='header-white-circle'>
                        <img className='header-yellow-triangle' src={Triangle} alt='Play'></img>
                        </div>
                    </div>
                    <div className='header-red-square'>
                    <svg className='header-images-head' viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.336 48.7899C73.7643 44.0241 74.997 38.9968 75 33.8474C75.005 24.8545 71.4875 16.3842 65.095 9.99697C58.7112 3.61839 50.2152 0.0683933 41.1723 0.000893369C33.4143 -0.0559816 25.7944 2.60448 19.7067 7.4951C13.8439 12.2051 9.64777 18.7595 7.85915 25.9876L0.74663 39.7144C-0.326451 41.7857 -0.238403 44.2097 0.982157 46.1986C2.20272 48.1875 4.33095 49.375 6.67522 49.375H6.92018V58.2813C6.92018 63.4506 11.1521 67.6563 16.3539 67.6563H25.6303V80H31.9194V61.4063H16.3539C14.6199 61.4063 13.2093 60.0044 13.2093 58.2813V43.1251H6.67522C6.61689 43.1251 6.46233 43.1251 6.35149 42.9444C6.24077 42.764 6.31138 42.6274 6.33803 42.5759L6.33812 42.5757L13.8384 27.9688C16.7773 15.4559 28.2934 6.2501 41.0388 6.2501C56.2581 6.36354 68.7194 18.7426 68.7109 33.844C68.7085 38.0044 67.704 42.083 65.7251 45.9666C62.4326 52.4288 60.6923 59.7761 60.6923 67.2142V80H66.9814V67.2142C66.9814 60.7522 68.4872 54.3811 71.336 48.7899ZM52.3417 26.3116L56.3345 22.3437L51.8875 17.9243L47.8947 21.8923C46.8946 21.3041 45.8072 20.8476 44.655 20.5518V14.9999H38.3659V20.5518C37.2137 20.8476 36.1264 21.3043 35.1262 21.8923L31.1334 17.9243L26.6864 22.3437L30.6792 26.3116C30.0874 27.3055 29.628 28.386 29.3303 29.5312H23.5866V35.7812H29.3303C29.628 36.9262 30.0875 38.0068 30.6792 39.0007L26.6864 42.9686L31.1334 47.388L35.1262 43.4201C36.1264 44.0082 37.2137 44.4647 38.3659 44.7605V50.3124H44.655V44.7605C45.8072 44.4647 46.8946 44.008 47.8947 43.4201L51.8875 47.388L56.3345 42.9686L52.3417 39.0007C52.9335 38.0068 53.393 36.9263 53.6906 35.7812H59.4343V29.5312H53.6906C53.393 28.3862 52.9335 27.3057 52.3417 26.3116ZM41.5105 38.7499C38.0371 38.7499 35.2214 35.9516 35.2214 32.4999C35.2214 29.0482 38.0371 26.2499 41.5105 26.2499C44.9838 26.2499 47.7996 29.0482 47.7996 32.4999C47.7996 35.9518 44.9838 38.7499 41.5105 38.7499Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}