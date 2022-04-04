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

const StagesOfWork = () => {

    const { current, chooseHandler } = useSlider(4)
    const images = [
        WorkImgItem1,
        WorkImgItem2,
        WorkImgItem3,
        WorkImgItem4,
    ]
    const imagesMB = [
        WorkImgItem1sm,
        WorkImgItem2sm,
        WorkImgItem3sm,
        WorkImgItem4sm,
    ]

    return (
        <div className="site-main__work">
            <div className="work__container container">
                <h2 className="work__title">Этапы работ</h2>
                <div className="work__cards">
                    <div className="work__card">
                        <img src={ images[current - 1] } alt="Slider Item" />
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
                </div>
            </div>
        </div>
    );
}
 
export default StagesOfWork;