import NavBar from "../../components/Sections/NavBar";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import "./index.scoped.css";

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
            <div className="trash">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est varius, maximus tellus sit amet, dignissim dui. Praesent feugiat urna id erat posuere ultricies. Sed blandit mi ac enim laoreet, sed ultricies mauris fermentum. Sed vestibulum risus massa, vitae gravida magna interdum sed. Sed eget volutpat enim. In hac habitasse platea dictumst. Sed non placerat felis. Sed elementum ligula diam, vel tincidunt ligula dignissim in. Nunc fringilla lobortis sem, vitae rutrum arcu ullamcorper pellentesque. In nec metus eros. Phasellus non porta ante, sed placerat augue. Integer at suscipit dolor.

                Donec ultrices posuere laoreet. Pellentesque accumsan risus sed blandit vulputate. Cras quis orci nibh. Vestibulum euismod arcu a est pulvinar, ac lacinia leo feugiat. Ut ullamcorper congue luctus. Nunc ac feugiat metus. Morbi euismod malesuada ipsum sed placerat.

                Morbi gravida vel ligula quis consequat. Donec a justo porta, rhoncus magna sed, tempus eros. Nullam dignissim vel metus quis fermentum. Integer molestie ante sit amet orci cursus vehicula. Donec malesuada mauris quis ex imperdiet tincidunt. Curabitur sodales mi sit amet laoreet interdum. Maecenas et pulvinar elit. Duis vitae sem a nunc dapibus euismod. Aliquam viverra lorem imperdiet, dapibus sem eget, malesuada massa. Maecenas ante enim, cursus sed hendrerit vitae, venenatis eu lacus. Phasellus in massa eget ante malesuada blandit. Ut sit amet justo non libero faucibus tincidunt.

                Proin hendrerit enim in nibh placerat elementum. Duis eu finibus augue, sit amet finibus ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse turpis urna, finibus id mauris vitae, lobortis maximus justo. Curabitur quis tortor non erat cursus rhoncus vitae eu orci. Nam feugiat rutrum condimentum. Nunc vestibulum mi sed sem elementum, in consequat justo aliquet. Donec turpis turpis, luctus a porta ut, dapibus nec ante. Phasellus fringilla nulla metus. Quisque feugiat luctus felis sit amet mattis. Nulla posuere a lectus at posuere. Integer id purus finibus, vulputate sapien sit amet, lacinia diam. Morbi euismod, purus eu scelerisque ultricies, lacus purus iaculis nibh, vel sollicitudin dui nulla a ex. Etiam leo lorem, maximus eget faucibus eu, fermentum vel nisi.

                Suspendisse iaculis tincidunt nulla, ac imperdiet dui tincidunt sit amet. Sed semper sit amet sem nec vestibulum. Donec felis dui, ultricies vitae mi in, tempor elementum augue. Suspendisse viverra leo in ante sodales feugiat. Sed ut rhoncus diam. Mauris ornare porttitor vehicula. Etiam ac neque eros. In non lobortis neque. Nunc bibendum sapien a iaculis ultrices. Suspendisse ac malesuada elit. Phasellus consequat ac ante a facilisis. Aenean ultricies tortor id tincidunt tincidunt. Cras faucibus ipsum sed faucibus laoreet. Nam viverra sapien at sollicitudin pellentesque. Sed nec tellus at orci vehicula dapibus eget efficitur velit.
            </div>
            {/*<Description />*/}
            {/*<Features />*/}
            {/*<Carousel />*/}
            {/*<Review />*/}
            {/*<ContactUs />*/}
            {/*<Footer />*/}
        </AppBody>
    );
}

export default MainPage;