import React from "react";
import { Link } from 'react-router-dom';

/* Styles imports */
import style from "./SiteFooter.module.css";
import css from "classnames";


const Footer = () => {

    return (
        <>
            <footer className={css(style.footer)}>
                <div className="center-object flex-item justify-space-between">
                    <div className={style.logo}>
                        <a href="#">
                            <h1 className="website-logo title-center"><span>Hard</span>Store</h1>
                        </a>
                    </div>
                    <div className={style.menu}>
                        <h6>Designed by <a href="https://github.com/FacundoRocha18" target='_blank' title="Facundo Rocha's GitHub">Facundo Rocha</a></h6>
                        {/* <nav>
                            <ul>
                                <li><Link to={'/'}>Inicio</Link></li>
                                {
                                    !token && <li><Link to={'/api/auth/login'}>Login</Link></li>
                                }
                                {
                                    username && <li><Link to={'/api/users/profile'}>{username.replace(/"/g, '')}</Link></li>
                                }
                                {
                                    token && <li><button type='submit' className={style.logout} onClick={onLogout}>Cerrar sesión</button></li>
                                }
                                <Link to={'api/products/shoppingCart'} className='show-cart btn'><span className="material-icons-outlined">shopping_cart</span></Link>

                            </ul>
                        </nav> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;