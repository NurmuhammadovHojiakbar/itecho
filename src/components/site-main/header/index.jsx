import MainHeaderImage from "./header-image";
import "./index.css"

const SiteMainHeader = () => {
    return (
        <header className="site-main__header">
            <div className="main-header__container container">
                <div className="main-header__left">
                    <h1 className="site-heading">
                    Создаем платформы и мобильные приложения для IOS, Android и Windows
                    </h1>
                    <div className="main-header__left-start">
                        <p>От идеи до первых пользователей</p>
                        <a href="#start">Начать проект</a>
                    </div>
                </div>
                <MainHeaderImage />
            </div>
        </header>
    );
}
 
export default SiteMainHeader;