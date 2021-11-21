import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';


function Header() {

    const [state, setState] = useState(0);

    const banner = [
        {
            first: '/static/transport-banner.jpg'
        },
        {
            second: '/static/transport-banner-two.jpg'
        },
        {
            third: '/static/transport-banner-three.jpg'
        },
    ]

    let currentBanner = '';

    function decrease(e) {
        setState(oldState => {
            oldState = oldState - 1;
            if (oldState < 0) {
                oldState = banner.length - 1;
            }
            return oldState;
        });
    }

    function increase(e) {
        setState(oldState => {
            oldState = oldState + 1;
            if (oldState > banner.length - 1) {
                oldState = 0;
            }
            return oldState;
        });
    }

    if (state === 0) {
        currentBanner = banner[state].first;
    } else if (state === 1) {
        currentBanner = banner[state].second;
    } else if (state === 2) {
        currentBanner = banner[state].third;
    }

    return (
        <section className='header'>
            <nav className='header_navigation'>
                <Link to="/"> <img className='header_logo' src="/static/logo.png" alt="logo" />  </Link>
                <ul className='header_navigation_list'>
                    <Link to="/">
                        <div className='dropdown_uslugi'>
                            <li className='header_navigation_item'>
                                УСЛУГИ <i className="fas fa-angle-down"></i>
                            </li>
                            <div className="dropdown_uslugi_content">
                                <ul>
                                    <li><Link to="/"><span>СУХОПЪТЕН ТРАНСПОРТ</span></Link></li>
                                    <li><Link to="/"><span>МОРСКИ ТРАНСПОРТ</span></Link></li>
                                    <li><Link to="/"><span>ВЪЗДУШЕН ТРАНСПОРТ</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className='dropdown_company'>
                            <li className='header_navigation_item'>
                                КОМПАНИЯ <i className="fas fa-angle-down"></i>
                            </li>
                            <div className="dropdown_company_content">
                                <ul>
                                    <li><Link to="/"><span>БИЗНЕС ФИЛОСОФИЯ</span></Link></li>
                                    <li><Link to="/"><span>УСТОЙЧИВОСТ</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Link><Link to="/">
                        <li className='header_navigation_item'>
                            ПАРТНЬОРИ
                        </li>
                    </Link><Link to="/">
                        <div className="dropdown_cariera">
                            <li className='header_navigation_item'>
                                КАРИЕРА <i className="fas fa-angle-down"></i>
                            </li>
                            <div className="dropdown_cariera_content">
                                <ul>
                                    <li><Link to="#"><span>КАРИЕРА В ТРАНСПОРТА</span></Link></li>
                                    <li><Link to="#"><span>МЛАД СПЕЦИАЛИСТ</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Link><Link to="/">
                        <li className='header_navigation_item'>
                            ЗА НАС
                        </li>
                    </Link><Link to="/contacts">
                        <li className='header_navigation_item'>
                            КОНТАКТИ
                        </li>
                    </Link>
                </ul>
            </nav>
            <article className='header_baner'>
                <i className="fas fa-chevron-left arrow" onClick={decrease}></i>
                <i className="fas fa-chevron-right arrow" onClick={increase}></i>
                <img className='banner' src={currentBanner} alt="banner" />
            </article>
        </section>
    );
}

export default Header;