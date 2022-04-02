import SiteLogo from "../svg/site-logo";
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
                            <a className="address-info__social-links address-info__social-links-facebook" href="https://facebook.com"></a>
                            <a className="address-info__social-links address-info__social-links-twitter" href="https://twitter.com"></a>
                            <a className="address-info__social-links address-info__social-links-linkedin" href="https://linkedin.com"></a>
                            <a className="address-info__social-links address-info__social-links-instagram" href="https://instagram.com"></a>
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