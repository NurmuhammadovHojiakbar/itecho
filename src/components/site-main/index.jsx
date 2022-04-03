import "./index.css"
import SiteMainHeader from "./header";
import Service from "./service";
import HowItWorks from "./how-works";
import Contact from "./contact";

const SiteMain = () => {
    return (
        <main className="site-main">
            <SiteMainHeader />
            <Service />
            <HowItWorks />
            <Contact />
        </main>
    );
}
 
export default SiteMain;