import "./index.css"
import SiteMainHeader from "./header";
import Service from "./service";
import HowItWorks from "./how-works";
import Contact from "./contact";
import StagesOfWork from "./stages-of-work";
import Team from "./team";

const SiteMain = () => {
    return (
        <main className="site-main">
            <SiteMainHeader />
            <Service />
            <HowItWorks />
            <Contact />
            <StagesOfWork />
            <Team />
        </main>
    );
}
 
export default SiteMain;