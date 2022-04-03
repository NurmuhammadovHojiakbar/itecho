import "./index.css"
import TeamList from "./team-list";

const Team = () => {
    return (
        <div className="site-main__team">
            <div className="team__container container">
                <h2 className="team__title">Команда Itecho</h2>
                <p className="team__desc">Мы совместными усилиями достигаем лучшего результата</p>
                <TeamList />
            </div>
        </div>
    );
}
 
export default Team;