
import { Link } from 'react-router-dom';

import './Header.css';



function Header() {

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
                                <ul className="dropdown_uslugi_content_ul" >
                                    <li><Link to="/road-transport"><span>СУХОПЪТЕН ТРАНСПОРТ</span></Link></li>
                                    <li><Link to="/sea-transport"><span>МОРСКИ ТРАНСПОРТ</span></Link></li>
                                    <li><Link to="/air-transport"><span>ВЪЗДУШЕН ТРАНСПОРТ</span></Link></li>
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
                                <ul className="dropdown_uslugi_content_ul" >
                                    <li><Link to="/"><span>БИЗНЕС ФИЛОСОФИЯ</span></Link></li>
                                    <li><Link to="/"><span>УСТОЙЧИВОСТ</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Link><Link to="/partners">
                        <li className='header_navigation_item'>
                            ПАРТНЬОРИ
                        </li>
                    </Link><Link to="/">
                        <div className="dropdown_cariera">
                            <li className='header_navigation_item'>
                                КАРИЕРА <i className="fas fa-angle-down"></i>
                            </li>
                            <div className="dropdown_cariera_content">
                                <ul className="dropdown_uslugi_content_ul" >
                                    <li><Link to="/career"><span>КАРИЕРА В ТРАНСПОРТА</span></Link></li>
                                    <li><Link to="/career/specialist"><span>МЛАД СПЕЦИАЛИСТ</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Link><Link to="/about-us">
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
            
        </section>
    );
}

export default Header;