import "./index.scoped.css"
import AppContainer from "../../AppContainer";
import CarouselSeconds from "../CarouselSeconds";
function Secondhands(){
    return(
        <AppContainer>
            <div className="carousel-container">
                <div className="carousel-text-container">
                    <div className="carousel-text-big">
                        Кто с нами сотрудничает?
                    </div>
                    <div className="carousel-text-small">
                        Ваши любимые секонд-хенды уже представлены у нас на сайте!
                    </div>
                </div>
                <CarouselSeconds />
                <div className="carousel-button-container">
                    <button className="carousel-button">К товарам</button>
                </div>
            </div>
        </AppContainer>
    );
}

export default Secondhands;