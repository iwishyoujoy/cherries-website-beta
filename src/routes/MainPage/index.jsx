import NavBar from "../../components/Sections/NavBar";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import "./index.scoped.css";
import Description from "../../components/Sections/Description";
import "react-multi-carousel/lib/styles.css"
import Secondhands from "../../components/Sections/Secondhands";
import CarouselSeconds from "../../components/Sections/CarouselSeconds";
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
            <Secondhands />
            <div className="carousel-container">
                <CarouselSeconds />
            </div>
            {/*<Review />*/}
            {/*<ContactUs />*/}
            {/*<Footer />*/}
        </AppBody>
    );
}

export default MainPage;