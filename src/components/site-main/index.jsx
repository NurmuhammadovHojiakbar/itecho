import "./index.css"
import SiteMainHeader from "./header";
import Service from "./service";
import HowItWorks from "./how-works";
import Contact from "./contact";
import StagesOfWork from "./stages-of-work";
import Team from "./team";
import Projects from "./projects";

const SiteMain = () => {
    return (
        <main className="site-main">
            <SiteMainHeader />
            <Service />
            <HowItWorks />
            <Contact />
            <StagesOfWork />
            <Projects />
            <Team />
        </main>
    );
}
 
export default SiteMain;