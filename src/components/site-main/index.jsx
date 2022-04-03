import "./index.css"
import SiteMainHeader from "./header";
import Service from "./service";

const SiteMain = () => {
    return (
        <main className="site-main">
            <SiteMainHeader />
            <Service />
        </main>
    );
}
 
export default SiteMain;