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
                                УСЛУГИ
                            </li>
                            <div class="dropdown_uslugi_content">
                                <ul>
                                    <li><a href="#">Link 1</a></li>
                                    <li><a href="#">Link 2</a></li>
                                    <li><a href="#">Link 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <li className='header_navigation_item'>
                            КОМПАНИЯ
                        </li>
                    </Link><Link to="/">
                        <li className='header_navigation_item'>
                            ПАРТНЬОРИ
                        </li>
                    </Link><Link to="/">
                        <li className='header_navigation_item'>
                            КАРИЕРА
                        </li>
                    </Link><Link to="/">
                        <li className='header_navigation_item'>
                            НОВИНИ
                        </li>
                    </Link><Link to="/">
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