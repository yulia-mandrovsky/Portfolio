import './Numbers.css'
import { useNav } from '../../customHooks/useNav';


export default function Numbers() {

    const numbersRef = useNav('Numbers');

    return(
        <section className='numbers-wrapper' ref={numbersRef} id='numbersContainer'>
            <div className='numbers-content-wrapper'>
                <h3 className='numbers-section-subtitle' >Some numbers</h3>
                <h2 className='numbers-section-title' >Completed 420+ Projects <br/>
Last Year</h2>
                <div className='numbers-blocks-wrapper'>
                    <div className='numbers-block-card'>
                        <div className='numbers-block-card-circle-blue'></div>
                        <h4 className='numbers-card-header'>123K</h4>
                        <p className='numbers-card-text'>
                        By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                        </p>
                    </div>
                    <div className='numbers-block-card'>
                        <div className='numbers-block-card-circle-red'></div>
                        <h4 className='numbers-card-header'>123K</h4>
                        <p className='numbers-card-text'>
                        By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                        </p>
                    </div>
                    <div className='numbers-block-card'>
                        <div className='numbers-block-card-circle-yellow'></div>
                        <h4 className='numbers-card-header'>123K</h4>
                        <p className='numbers-card-text'>
                        By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}