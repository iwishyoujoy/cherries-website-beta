import NavBar from "../../components/Sections/NavBar";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import "./index.scoped.css";
import Description from "../../components/Sections/Description";

function MainPage() {

    const headerNavigation = [
        {title: "Войти", link: "/"},
        {title: "FAQ", link: "/"},
        {title: "Избранное", link: "/"},
        {title: "Корзина", link: "/"}
    ];

    return (
        <AppBody>
            <NavBar navigation={headerNavigation} />
            <Header />
            <Description />
            {/*<Features />*/}
            {/*<Carousel />*/}
            {/*<Review />*/}
            {/*<ContactUs />*/}
            {/*<Footer />*/}
        </AppBody>
    );
}

export default MainPage;