import AppContainer from "../../AppContainer";
import "./index.scoped.css";

function Description(){

    const descriptionStepsForCustomer = [
        {header: "Выбор и оплата", src: require("./icons/magnifying-glass.png"), text: "Выбрать и оплатить товар можно на сайте любым удобным способом"},
        {header: "Проверка подлинности", src: require("./icons/shield.png"), text: "Все брендовые вещи перепроверяются нашими экспертами. Это не займет больше двух дней!"},
        {header: "Отправка товара", src: require("./icons/fast-delivery.png"), text: "После того, как вещь проверена, продавец отправляет зака любой удобной службой доставки"}
    ];

    return(
        <AppContainer>
            <div className="description-container">
                <div className="description-text">
                    <div className="description-text-big">
                        Как работает наш сервис?
                    </div>
                    <div className="description-text-small">
                        Мы изучили опыт зарубежных интернет-секонд-хендов и опыт наших пользователей, чтобы сделать Cherries простым, удобным и безопасным местом для покупки подержанных вещей из знакомых вам секонд-хендов
                    </div>
                </div>
                <div className="description-buttons-container">
                    <button className="description-button active">Для покупателей</button>
                    <button className="description-button">Для продавцов</button>
                </div>
                <div className="description-steps-container customer">
                    {descriptionStepsForCustomer.map(
                        (item, key) => (
                            <div key={key} className="description-step">
                                <img className="description-step-picture" src={item.src}/>
                                <div className="description-step-header">
                                    {item.header}
                                </div>
                                <div className="description-step-text">
                                    {item.text}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </AppContainer>
    );
}

// TODO сделать кнопку акцентным цветом

export default Description;