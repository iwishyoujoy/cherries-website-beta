import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import CategoryHeader from "../CategoryHeader";

function Categories(){
    const headerCategories = [
        {title: "Женское", link: "/", id: "men", class: "active"},
        {title: "Мужское", link: "/", id: "women", class: ""},
        {title: "Детское", link: "/", id: "kids", class: ""}
    ];

    const smallCategoriesWomen = [
        {title: "Новинки", class: "active"},
        {title: "Бренды", class: ""},
        {title: "Аксессуары", class: ""},
        {title: "Бьюти", class: ""},
        {title: "Обувь", class: ""},
        {title: "Одежда", class: ""},
        {title: "Сумки", class: ""},
        {title: "Украшения", class: ""}
    ];

    return (
        <AppContainer>
            <div className="categories-container">
                <div className="categories-big">
                    {headerCategories.map(
                        (item, key) => (
                            <a key={key} className={"categories-big-link " + item.class} href={item.link}>{item.title}</a>
                        )
                    )}
                </div>
                <div className="categories-small">
                    {smallCategoriesWomen.map(
                        (item, key) => (
                            <a key={key} className={"categories-small-link " + item.class} href="/">{item.title}</a>
                        )
                    )}
                </div>
            </div>
            <CategoryHeader headerSmall="Новинки" headerBig="Новинки" count="123"/>
        </AppContainer>
    );
}

export default Categories;