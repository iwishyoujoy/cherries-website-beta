import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import CategoryHeader from "../CategoryHeader";
import {Link} from "react-router-dom";

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
                            <Link key={key} className={"categories-big-link " + item.class} to={item.link}>{item.title}</Link>
                        )
                    )}
                </div>
                <div className="categories-small">
                    {smallCategoriesWomen.map(
                        (item, key) => (
                            <Link key={key} className={"categories-small-link " + item.class} to="/">{item.title}</Link>
                        )
                    )}
                </div>
            </div>
            <CategoryHeader headerSmall="Новинки" headerBig="Новинки" count="123"/>
        </AppContainer>
    );
}

export default Categories;