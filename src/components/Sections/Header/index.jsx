import "./index.scoped.css";
function Header(){
    return (
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
                <button className="header-button pointer">Товары</button>
                <button className="header-button pointer">Узнать больше</button>
            </div>
        </div>
    );
}

export default Header;