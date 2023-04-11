import "./index.scoped.css"
import AppContainer from "../../AppContainer";
import CarouselSeconds from "../CarouselSeconds";
import {useNavigate} from "react-router-dom";
function Secondhands(){
    const navigate = useNavigate();
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
                    <button className="carousel-button" onClick={() => navigate("/shop")}>К товарам</button>
                </div>
            </div>
        </AppContainer>
    );
}

export default Secondhands;