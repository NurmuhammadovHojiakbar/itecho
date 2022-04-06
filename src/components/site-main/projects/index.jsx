import "./index.css"
import useSlider from "../../../hooks/useSlider";
import GearsImg from "../../../assets/images/gears.png"
import ProjectsImg1 from "../../../assets/images/project-1.png"
import ProjectsImg2 from "../../../assets/images/project-2.png"
import ProjectsImg3 from "../../../assets/images/project-3.png"
import ProjectsImg4 from "../../../assets/images/project-4.png"


const controllers = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
]

const item = [
    {
        img: ProjectsImg1,
        title: "OSAGO-CRM",
        desc: "для страхового бизнеса",
        body: "Каждый проект мы начинаем с внимательного изучения рынка и аудитории компании. Берем на себя полный цикл создания мобильных и веб-приложений от проектирования до запуска"
    },
    {
        img: ProjectsImg2,
        title: "ARENDACAR.INFO",
        desc: "онлайн-сервис аренды авто",
        body: "Данная платформа обьединяет  личный кабинет арендодателя, арендатора и собственника автомобилей.  Все бизнес процессы автоматизированы."
    },
    {
        img: ProjectsImg3,
        title: "STRAHOVKAORG.RU",
        desc: "Личный кабинет страхового агента и оператора ТО",
        body: "Платформа полностью автоматизировала все бизнес- процессы для работы страхового комьюнити, благодаря этому имеем успешный проект."
    },
    {
        img: ProjectsImg4,
        title: "Gigma",
        desc: "маркетплейс для онлайн услуг",
        body: "Автоматизация офлайн, управление большим количеством лидов, интеграция с мобильными приложениями офлайн бизнеса с мобильными приложениями"
    },
]

const Projects = () => {

    const { chooseHandler,current } = useSlider(4)

    return (
        <div className="site-main__projects">
            <div className="projects__container container">
                <h2 className="service-help__title">Наши проекты</h2>
                <div className="projects__list">
                    <div className="projects__item">
                        <div className="projects__item-card">
                            <div className="media">
                                <img src={ GearsImg } alt="gears" />
                                <div className="media__text">
                                    <h3>{ item[current - 1].title }</h3>
                                    <p>{ item[current - 1].desc }</p>
                                </div>
                            </div>
                            <p className="projects__item-card-body">{ item[current - 1].body }</p>
                        </div>
                        <img className="projects__item-img" src={ item[current - 1].img } alt="Our Projects" />
                    </div>
                </div>
                <div className="work__controllers">
                    <a className="work__controllers-button-left" href="#start">Узнать еще</a>
                    <div className="work__controllers-wrapper">
                        {
                            controllers.map(b => (
                                <button className={`${current === b.id ? "active-button" : ""}`} key={ b.id } onClick={() => chooseHandler(b.id)} />
                            ))
                        }
                    </div>                    
                </div>
            </div>
        </div>
    );
}
 
export default Projects;