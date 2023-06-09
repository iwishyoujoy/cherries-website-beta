import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {useNavigate} from "react-router-dom";
function Header(){
    const navigate = useNavigate();
    return (
        <AppContainer>
            <div className="header">
                <div className="header-text">
                    <div className="header-big-text">
                        Искусство находить красоту в прошлом
                    </div>
                    <div className="header-small-text">
                        Одежда с историей - для тех, кто ценит качество
                    </div>
                </div>
                <div className="header-buttons">
                    <button className="header-button pointer" onClick={() => navigate("/shop")}>Товары</button>
                    <button className="header-button pointer">Узнать больше</button>
                </div>
            </div>
        </AppContainer>
    );
}

export default Header;