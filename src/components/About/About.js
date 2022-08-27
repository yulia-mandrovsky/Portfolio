import './About.css';
import Poligon from './Polygon.svg';
import BigDots from './BigDots.svg';
import SmallDots from './SmallDots.svg';
import DoMore from './DoMore.jpg';
import useNav from '../../customHooks/useNav';

export default function About() {

    const handleClick = () => {
		document.getElementById('portfolioContainer'
        ).scrollIntoView({ behavior: 'smooth' });
	};

    const aboutRef = useNav('About');
    return (
        <section className='about-wrapper' ref={aboutRef} id='aboutContainer'>
            <img className='polygon-image' src={Poligon} alt='Poligon' height='709px'></img>
            <div className='about-content-wrapper'>
                <div className='about-image-wrapper' >
                    <img className='about-big-dots' src={BigDots} alt='Big Dots'></img>
                    <div className='about-blue-square'></div>
                    <div className='about-white-square'>
                        <div className='about-little-image'>
                            <img className='about-little-img' src={DoMore} alt='Do More'></img>
                        </div>
                        <div className='about-little-form'>
                            <div className='about-image-first-rectangle' ></div>
                            <div className='about-image-second-rectangle'></div>
                            <div className='about-image-third-rectangle'></div>
                            <div className='about-images-circle-wrapper' >
                                <div className='about-images-first-circle'></div>
                                <div className='about-images-second-circle'></div>
                                <div className='about-images-third-circle'></div>
                            </div>
                        </div>
                    </div>
                    <img className='about-small-dots' src={SmallDots} alt='Small Dots'></img>
                </div>
                <div className='about-text-wrapper' >
                    <h3 className='about-section-subtitle' >About</h3>
                    <h2 className='about-section-title' >Passion, Heart & Soul</h2>
                    <div className='about-description-bold' >Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</div>
                    <div className='about-description'>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.</div>
                    <div className='about-btns-row'>
                    <btn className='about-portfolio-btn btn' 
                    onClick={handleClick}>Portfolio</btn>
                    </div>
                </div>
            </div>
        </section>
    )
} 