import NavBar from "../../components/Sections/NavBar";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import Description from "../../components/Sections/Description";
import "react-multi-carousel/lib/styles.css"
import Secondhands from "../../components/Sections/Secondhands";
import Footer from "../../components/Sections/Footer";
import Questions from "../../components/Sections/Questions";
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
            <Questions />
            <Footer />
        </AppBody>
    );
}
// TODO сделать адаптацию под телефон и планшет

export default MainPage;