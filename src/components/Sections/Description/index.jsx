import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import {useState} from "react";

function Description(){

    const descriptionStepsForCustomer = [
        {header: "Выбор и оплата", src: require("./icons/magnifying-glass.png"), text: "Выбрать и оплатить товар можно на сайте любым удобным способом"},
        {header: "Проверка подлинности", src: require("./icons/shield.png"), text: "Все брендовые вещи перепроверяются нашими экспертами. Это не займет больше двух дней!"},
        {header: "Отправка товара", src: require("./icons/fast-delivery.png"), text: "После того, как вещь проверена, продавец отправляет заказ любой удобной службой доставки"}
    ];

    const descriptionStepsForSecond = [
        {header: "Размещение товара", src: require("./icons/new.png"), text: "Выбрать необходимую подписку и выставить товары на продажу можно в 2 клика"},
        {header: "Проверка подлинности", src: require("./icons/best-seller.png"), text: "Загрузите фото имеющихся бирок или сертификатов. Это займет пару минут, а наши эксперты проверят товар перед его продажей"},
        {header: "Перевод денег", src: require("./icons/credit-card.png"), text: "После получения товара покупателем деньги автоматически переводятся на ваш счет"}
    ];

    const [isCustomerVisible, setCustomerVisible] = useState(true);
    const [isSecondVisible, setSecondVisible] = useState(false);

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
                    <button className={"black-white-button pointer " + (isCustomerVisible ? "active" : "")} onClick={() => {
                        setCustomerVisible(true);
                        setSecondVisible(false);
                    }}>Для покупателей</button>
                    <button className={"black-white-button pointer " + (isSecondVisible ? "active" : "")} onClick={() => {
                        setCustomerVisible(false);
                        setSecondVisible(true);
                    }}>Для продавцов</button>
                </div>
                <div className={"description-steps-container " + (isCustomerVisible ? "show" : "")}>
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
                <div className={"description-steps-container " + (isSecondVisible ? "show" : "")}>
                    {descriptionStepsForSecond.map(
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