import "./index.css"
import Clients from "./clients";
import Help from "./help";

const Service = () => {
    return (
        <div className="site-main__service">
            <div className="main-service__container container">
                <Help />
                <Clients />
            </div>
        </div>
    );
}
 
export default Service;