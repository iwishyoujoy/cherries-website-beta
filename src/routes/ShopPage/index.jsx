import AppBody from "../../components/AppBody";
import NavBar from "../../components/Sections/NavBar";
import Categories from "../../components/Sections/Categories";
import ShoppingItems from "../../components/Sections/ShoppingItems";
import Footer from "../../components/Sections/Footer";

function ShopPage(){

    const headerNavigation = [
        {title: "На главную", link: "/"},
        {title: "FAQ", link: "/"},
        {title: "Избранное", link: "/"},
        {title: "Контакты", link: "/"},
        {title: "Корзина", link: "/"},
        {title: "Войти", link: "/"}
    ];

    return (
        <AppBody>
            <NavBar navigation={headerNavigation}/>
            <Categories />
            <ShoppingItems />
            <Footer />
        </AppBody>
    );
}

export default ShopPage;