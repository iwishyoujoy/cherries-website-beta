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
        {title: "Товары", link: "/shop"},
        {title: "FAQ", link: "/faq"},
        {title: "Избранное", link: "/liked"},
        {title: "Контакты", link: "/contacts"},
        {title: "Войти", link: "/login"}
    ];

    return (
        <AppBody>
            <NavBar navigation={headerNavigation}/>
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