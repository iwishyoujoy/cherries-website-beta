import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import CategoryHeader from "../CategoryHeader";
import {Link} from "react-router-dom";
import {useState} from "react";

function Categories(){
    const headerCategories = [
        {title: "Женское", id: "women"},
        {title: "Мужское", id: "men"},
        {title: "Детское", id: "kids"}
    ];

    const smallCategoriesWomen = [
        {title: "Новинки", id: "new"},
        {title: "Бренды", id: "brands"},
        {title: "Аксессуары", id: "accessories"},
        {title: "Бьюти", id: "beauty"},
        {title: "Обувь", id: "shoes"},
        {title: "Одежда", id: "clothes"},
        {title: "Сумки", id: "bags"},
        {title: "Украшения", id: "jewelry"}
    ];

    const smallCategoriesMen = [
        {title: "Новинки", id: "new"},
        {title: "Бренды", id: "brands"},
        {title: "Аксессуары", id: "accessories"},
        {title: "Бьюти", id: "beauty"},
        {title: "Обувь", id: "shoes"},
        {title: "Одежда", id: "clothes"},
        {title: "Сумки", id: "bags"}
    ];

    const smallCategoriesKids = [
        {title: "Новинки", id: "new"},
        {title: "Бренды", id: "brands"},
        {title: "Девочки 0-3", id: "girls0-3"},
        {title: "Девочки 4-14", id: "girls4-14"},
        {title: "Мальчики 0-3", id: "boys0-3"},
        {title: "Мальчики 4-14", id: "boys4-14"}
    ];

    const categories = {
        men: smallCategoriesMen,
        women: smallCategoriesWomen,
        kids: smallCategoriesKids}

    const [isGeneralLinkActive, setGeneralLinkActive] = useState(0);
    const [isSpecificLinkActive, setSpecificLinkActive] = useState(0);
    const [ListOfLinks, setListOfLinks] = useState(smallCategoriesWomen);
    const [headerGeneral, setHeaderGeneral] = useState("Женское");
    const [headerSpecific, setHeaderSpecific] = useState("Новинки");

    const selectCategory = (id) => {
        setListOfLinks(categories[id]);
    };

    const changeheaderGeneral = (id) => {
        setHeaderGeneral(headerCategories.find((c) => c.id === id).title);
    };

    const changeheaderSpecific = (id) => {
        if (headerGeneral === "Женское") {
            setHeaderSpecific(smallCategoriesWomen.find((c) => c.id === id).title);
        }
        if (headerGeneral === "Мужское") {
            setHeaderSpecific(smallCategoriesMen.find((c) => c.id === id).title);
        }
        if (headerGeneral === "Детское") {
            setHeaderSpecific(smallCategoriesKids.find((c) => c.id === id).title);
        }
    };

    return (
        <AppContainer>
            <div className="categories-container">
                <div className="categories-big">
                    {headerCategories.map(
                        (item, key) => (
                            <Link key={key} id={item.id} className={"categories-big-link " + (isGeneralLinkActive === key ? "active" : "")} to="/shop" onClick={() => {
                                setGeneralLinkActive(key);
                                selectCategory(item.id);
                                changeheaderGeneral(item.id);
                            }}>{item.title}</Link>
                        )
                    )}
                </div>
                <div className="categories-small">
                    {ListOfLinks.map(
                        (item, key) => (
                            <Link key={key} id={item.id} className={"categories-small-link " + (isSpecificLinkActive === key ? "active" : "")} to="/shop" onClick={() => {
                                setSpecificLinkActive(key);
                                changeheaderSpecific(item.id);
                            }}>{item.title}</Link>
                        )
                    )}
                </div>
            </div>
            <CategoryHeader headerGeneral={headerGeneral} headerSpecific={headerSpecific} count="123"/>
        </AppContainer>
    );
}

export default Categories;