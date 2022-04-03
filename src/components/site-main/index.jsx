import "./index.css"
import SiteMainHeader from "./header";
import Service from "./service";
import HowItWorks from "./how-works";

const SiteMain = () => {
    return (
        <main className="site-main">
            <SiteMainHeader />
            <Service />
            <HowItWorks />
        </main>
    );
}
 
export default SiteMain;