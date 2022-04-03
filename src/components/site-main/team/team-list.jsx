import TeamItem from "./team-item";
import ArtemImg from "../../../assets/images/artem.png"
import AleksandrImg from "../../../assets/images/aleksandr.png"
import KirilImg from "../../../assets/images/kiril.png"
import NatalyaImg from "../../../assets/images/natalya.png"

const teamList = [
    {
        id: 1,
        name: "Артем Полищук",
        job: "Project manager",
        address: "Россия, Новосибирск",
        connect: "Написать в  whatsapp",
        img: ArtemImg
    },
    {
        id: 2,
        name: "Алексей Снегирев",
        job: "Ведущий разработчик",
        address: "Россия, Новосибирск",
        connect: "Закажите консультацию",
        img: AleksandrImg
    },
    {
        id: 3,
        name: "Алекснадр Крушанов",
        job: "Ведущий разработчик",
        address: "Россия, Новосибирск",
        connect: "Закажите консультацию",
        img: AleksandrImg
    },
    {
        id: 4,
        name: "Кирилл Гончаров",
        job: "Фронтэнд разработчик",
        address: "Россия, Москва",
        connect: "Закажите консультацию",
        img: KirilImg
    },
    {
        id: 5,
        name: "Виктор Батищев",
        job: "Фронтэнд разработчик",
        address: "Россия, Москва",
        connect: "Закажите консультацию",
        img: KirilImg
    },
    {
        id: 6,
        name: "Наталья Килина",
        job: "менеджер",
        address: "Россия, Новосибирск",
        connect: "Закажите консультацию",
        img: NatalyaImg
    },
]

const TeamList = () => {
    return (
        <ul className="team__list">
                {
                    teamList.map(member => (
                        <TeamItem key={ member.id } member = {member} />
                    ))
                }
        </ul>
    );
}
 
export default TeamList;