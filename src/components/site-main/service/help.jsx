import StartupImg from "../../../assets/images/startup.png"
import AutomizationImg from "../../../assets/images/automization.png"
import OptimizationImg from "../../../assets/images/optimization.png"
import SaasImg from "../../../assets/images/saas.png"

const help = [
    {
        id: 1,
        title: "Увеличить",
        desc: "прибыль компании",
        img: StartupImg,
        class: "service-help__card"
    },
    {
        id: 2,
        title: "Автоматизировать",
        desc: "взаимодействие с клиентами",
        img: AutomizationImg,
        class: "service-help__card service-help__card-move"
    },
    {
        id: 3,
        title: "Оптимизировать",
        desc: "бинес-процессы",
        img: OptimizationImg,
        class: "service-help__card service-help__card-move"
    },
    {
        id: 4,
        title: "Перенести",
        desc: "бизнес в облако",
        img: SaasImg,
        class: "service-help__card"
    },
]

const Help = () => {
    return (
        <div className="main-service__help">
            <h2 className="service-help__title">Приложение поможет вам:</h2>
            <div className="service-help__cards">
                {
                    help.map(item => (
                        <div className={ item.class } key={ item.id }>
                            <h3>{ item.title }</h3>
                            <p>{ item.desc }</p>
                            <img src={ item.img } alt={ item.title } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Help;