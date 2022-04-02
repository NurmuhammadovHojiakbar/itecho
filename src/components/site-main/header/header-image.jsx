import HeaderImage from "../../../assets/images/header-img.svg"
import BigDron from "./big-dron";
import SmallDron from "./small-dron";

const MainHeaderImage = () => {
    return (
        <div className="main-header__image">
            <BigDron />
            <SmallDron />
            <img src={HeaderImage} alt="header-intro" />
        </div>
    );
}
 
export default MainHeaderImage;