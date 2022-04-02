import SmallDronImage from "../../../assets/images/small-dron.svg"
import Parrak from "../../../assets/images/dron-parrak.png"

const SmallDron = () => {
    return (
        <div className="dron small-dron">
            <img src={SmallDronImage} alt="Small Dron" />
            <img className="dron-parrak dron-parrak-1" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-2" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-3" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-4" src={Parrak} alt="Big Dron Parrak" />
        </div>
    );
}
 
export default SmallDron;