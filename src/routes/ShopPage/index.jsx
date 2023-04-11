import AppBody from "../../components/AppBody";
import NavBar from "../../components/Sections/NavBar";

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
            {/*<Categories />*/}
            
        </AppBody>
    );
}

export default ShopPage;