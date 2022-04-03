import "./index.css"

const Contact = () => {
    return (
        <div className="site-main__contact">
            <div className="contact__container container">
                <h2 className="contact__title">Хотите идти в ногу со временем?</h2>
                <form className="contact__form">
                    <h3>Напишите нам</h3>
                    <input type="email" name="email" placeholder="Ваш e-mail" />
                    <button type="submit">Начать проект</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;