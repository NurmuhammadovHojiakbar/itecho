import { useState } from "react";
import SiteLogo from "../svg/site-logo";
import SiteHeaderNav from "./site-header-nav";
import "./site-header.css"

const SiteHeader = () => {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="site-header__container container">
                <SiteLogo 
                    classText="site-header__logo" 
                    width="49" 
                    height="22" 
                    color="#000" 
                />
                <button 
                    className={`navigation-opener ${isOpen? "navigation-close" : ""}`} 
                    onClick={()=>setIsOpen(!isOpen)}    
                />
                <SiteHeaderNav open={isOpen} />
            </div>
        </header>
    );
}
 
export default SiteHeader;