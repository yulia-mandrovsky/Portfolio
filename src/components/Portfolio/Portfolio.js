import './Portfolio.css';
import { useNav } from '../../customHooks/useNav';
import { useState } from 'react';


export default function Portfolio() {

    const portfolioRef = useNav('Portfolio');
   
    const [isNeedToShow, setIsNeedToShow] = useState (false);

    const handleClick = () => {
        let element = document.getElementById('forHide');
        if (isNeedToShow === false) {
            setIsNeedToShow(true);
            element.style.display = 'grid';
            console.log(isNeedToShow);
        } else {
           setIsNeedToShow(false);
           console.log(isNeedToShow);
           element.style.display = 'none';
        }
	};



    return (
        <section className='potfolio-wrapper' ref={portfolioRef} id='portfolioContainer'>
            <div className='portfolio-content-wrapper'>
                <div className='portfolio-information-wrapper'>
                    <div className='portfolio-text-wrapper'>
                        <h3 className='portfolio-section-subtitle' >portfolio</h3>
                        <h2 className='portfolio-section-title' >My Works</h2>
                        <div className='portfolio-section-description'> Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</div>
                    </div>
                    <div className='portfolio-btn-wrapper'>
                        <button className="portfolio-show-more-btn btn" onClick={handleClick}>{!isNeedToShow ? 'Show More' : 'Show Less'}</button>
                    </div>
                </div>
                    <div className='portfolio-cards-wrapper'>
                        <div className='portfolio-cards-first-row'>
                            <a id='HelperCard' className='portfolio-card-item' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky/Helper_Project'>
                                <div className='portfolio-card-description'>
                                    <h3 className='portfolio-card-title'>Helper Project</h3>
                                    <p className='portfolio-card-subtitle'>Development</p>
                                </div>
                            </a>
                            <a id='MovieCard' className='portfolio-card-item' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky/Movie_organizer'>
                            <div className='portfolio-card-description'>
                                    <h3 className='portfolio-card-title'>Movie Organizer</h3>
                                    <p className='portfolio-card-subtitle'>Development</p>
                                </div>
                            </a>
                            <a id='CurrencyCard' className='portfolio-card-item' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky/Currency_converter'>
                            <div className='portfolio-card-description'>
                                <h3 className='portfolio-card-title'>Currency Converter</h3>
                                <p className='portfolio-card-subtitle'>Development</p>
                            </div>
                        </a>
                        </div><br></br>
                        <div id='forHide' className='portfolio-cards-for-hide-show hide'>
                            <a id='PiggyCard' className='portfolio-card-item' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky/Piggy-bank'>
                            <div className='portfolio-card-description'>
                                    <h3 className='portfolio-card-title'>Piggy Bank</h3>
                                    <p className='portfolio-card-subtitle'>Development</p>
                                </div>
                            </a>
                            <a id='TaskTrackerCard' className='portfolio-card-item' target="_blank" rel="noreferrer" href='https://github.com/yulia-mandrovsky/Task_tracker'>
                            <div className='portfolio-card-description'>
                                    <h3 className='portfolio-card-title'>Task Tracker</h3>
                                    <p className='portfolio-card-subtitle'>Development</p>
                            </div>
                        </a>
                    </div>    
                </div>
            </div>
        </section>               
    )
}