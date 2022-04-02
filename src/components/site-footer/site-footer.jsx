import Facebook from "../svg/facebook";
import Instagram from "../svg/instagram";
import Linkedin from "../svg/linkedin";
import SiteLogo from "../svg/site-logo";
import Twitter from "../svg/twitter";
import "./site-footer.css"

const SiteFooter = () => {
    return (  
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__left">
                    <SiteLogo 
                        classText="site-footer__logo"
                        width="187"
                        height="78"
                        color="#fff"    
                    />
                    <p>Полезные приложения</p>
                </div>
                <div className="site-footer__right">
                    <div className="address-info">
                        <p>Новосибирск, Россия, ул. Красный проспект, д. 65 офис 48а <br /> <a className="address-info__tel" href="tel:+73833542900">+7 (383) 354-29-00</a></p>                        
                        <div className="address-info__social">
                            <a className="address-info__social-links" href="https://facebook.com" aria-label="facebook link">
                                <Facebook />
                            </a>
                            <a className="address-info__social-links" href="https://twitter.com" aria-label="twitter link">
                                <Twitter />
                            </a>
                            <a className="address-info__social-links" href="https://linkedin.com" aria-label="linkedin link">
                                <Linkedin />
                            </a>
                            <a className="address-info__social-links" href="https://instagram.com" aria-label="instagram link">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                    <ul className="site-footer__list">
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#home">Домой</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#how-it-happened">Как это происходит?</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#clients">Наши клиенты</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#team">Команда</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#contact">Связаться с нами</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#privacy-policy">Политика конфидиенциальности</a>
                        </li>
                    </ul>
                    <ul className="site-footer__list">
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#stages-of-work">Этапы работ</a>
                        </li>
                        <li className="site-footer__item">
                            <a className="site-footer__link" href="#projects">Наши проекты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default SiteFooter;