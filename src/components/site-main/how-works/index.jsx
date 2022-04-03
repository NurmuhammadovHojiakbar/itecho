import "./index.css"
import AnaliticImg from "../../../assets/images/analitic.png"
import DesignImg from "../../../assets/images/ui-ux.png"
import RazrabotkaImg from "../../../assets/images/razrabotka.png"
import TestImg from "../../../assets/images/test.png"

const HowItWorks = () => {
    return (
        <div className="site-main__how">
            <div className="how__container container">
                <h2 className="service-help__title">Как это происходит?</h2>
                <div className="how__cards">
                    <div className="how__item">
                        <div className="how__card how__card-left">
                            <h3>01</h3>
                            <img src={AnaliticImg} alt="how it works" />
                            <div className="how__card-text">
                                <h4>Аналитика</h4>
                                <span />
                                <p>Для уверенного старта проекта полностью изучаем бизнес процессы вашей компании</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="how__item">
                        <a className="how__item-more" href="#projects">Узнать подробнее</a>
                        <div className="how__card how__card-right">
                            <h3>02</h3>
                            <img src={DesignImg} alt="how it works" />
                            <div className="how__card-text">
                                <h4>Ui, Ux проектирование</h4>
                                <span />
                                <p>До мельчайших деталей прорабатываем интерфейс и дизайн приложений</p>
                            </div>
                        </div>
                    </div>
                    <div className="how__item">
                        <div className="how__card how__card-left">
                            <h3>03</h3>
                            <img src={RazrabotkaImg} alt="how it works" />
                            <div className="how__card-text">
                                <h4>Разработка</h4>
                                <span />
                                <p>Пишем код на самых современных фреймфорках,  дающих превосходную производительность, при минимальной стоимости</p>
                            </div>
                        </div>
                    </div>
                    <div className="how__item">
                        <div className="how__card how__card-right">
                            <h3>04</h3>
                            <img src={TestImg} alt="how it works" />
                            <div className="how__card-text">
                                <h4>Тестирование и запуск</h4>
                                <span />
                                <p>Тестируем сервис на разных устройствах и гарантируем качественный запуск проекта </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HowItWorks;