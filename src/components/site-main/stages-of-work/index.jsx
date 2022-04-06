import "./index.css"
import useSlider from "../../../hooks/useSlider";
import WorkImgItem1 from "../../../assets/images/work-1.png"
import WorkImgItem2 from "../../../assets/images/work-2.png"
import WorkImgItem3 from "../../../assets/images/work-3.png"
import WorkImgItem4 from "../../../assets/images/work-4.png"
import WorkImgItem1sm from "../../../assets/images/work-1-sm.png"
import WorkImgItem2sm from "../../../assets/images/work-2-sm.png"
import WorkImgItem3sm from "../../../assets/images/work-3-sm.png"
import WorkImgItem4sm from "../../../assets/images/work-4-sm.png"

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

const images = [
    {
        img: WorkImgItem1,
        style: {
            "box-shadow": "0px 69px 114px rgba(124, 20, 253, 0.08)",
            "border-radius": "20px"
        }
    },
    {
        img: WorkImgItem2,
        style: {
            
        }
    },
    {
        img: WorkImgItem3,
        style: {
            
        }
    },
    {
        img: WorkImgItem4,
        style: {
            
        }
    },
]

const imagesMB = [
    WorkImgItem1sm,
    WorkImgItem2sm,
    WorkImgItem3sm,
    WorkImgItem4sm,
]

const StagesOfWork = () => {

    const { current, chooseHandler } = useSlider(4)

    return (
        <div className="site-main__work">
            <div className="work__container container">
                <h2 className="work__title">Этапы работ</h2>
                <div className="work__cards">
                    <div 
                        className="work__card"                  
                    >
                        <img 
                            src={ images[current - 1].img } 
                            alt="Slider Item"     
                            style={ images[current - 1].style }                             
                        />
                    </div>
                </div>
                <div className="work__cards work__cards-sm">
                    <div className="work__card">
                        <img src={ imagesMB[current - 1] } alt="Slider Item" />
                    </div>
                </div>
                <div className="work__controllers">
                    <div className="work__controllers-wrapper">
                        {
                            controllers.map(b => (
                                <button className={`${current === b.id ? "active-button" : ""}`} key={ b.id } onClick={() => chooseHandler(b.id)} />
                            ))
                        }
                    </div>
                    <a className="work__controllers-button">Узнать подробнее</a>
                </div>
            </div>
        </div>
    );
}
 
export default StagesOfWork;