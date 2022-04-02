const SiteHeaderNav = ({open}) => {
    return (
        <nav className={`site-header__nav ${open? "site-header__nav-open" : ""}`}>
            <ul className="site-header__list">
                <li className="site-header__item">
                    <a className="site-header__link" href="#stages-of-work">Этапы работ</a>
                </li>
                <li className="site-header__item">
                    <a className="site-header__link" href="#projects">Проекты</a>
                </li>
                <li className="site-header__item">
                    <a className="site-header__link" href="#team">Команда</a>
                </li>
                <li className="site-header__item">
                    <a className="site-header__link" href="#contact">Контакты</a>
                </li>
            </ul>
            <a className="site-header__start-link" href="#start">Стартовать</a>
        </nav>
    );
}
 
export default SiteHeaderNav;