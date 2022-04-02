import BigDronImage from "../../../assets/images/big-dron.svg"
import Parrak from "../../../assets/images/dron-parrak.png"

const BigDron = () => {
    return (
        <div className="dron big-dron">
            <img src={BigDronImage} alt="Big Dron" />
            <img className="dron-parrak dron-parrak-1" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-2" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-3" src={Parrak} alt="Big Dron Parrak" />
            <img className="dron-parrak dron-parrak-4" src={Parrak} alt="Big Dron Parrak" />
        </div>
    );
}
 
export default BigDron;