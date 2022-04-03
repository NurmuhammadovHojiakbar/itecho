const TeamItem = ({ member }) => {
    return (
        <li className="team__item">
            <div className="img-wrapper">
                <img src={ member.img } alt={ member.name } />
            </div>
            <h3 className="team__item-name">{ member.name }</h3>
            <p className="team__item-job">{ member.job }</p>
            <p className="team__item-address">{ member.address }</p>
            <a className="team__item-connect" href="#start">{ member.connect }</a>
        </li>
    );
}
 
export default TeamItem;