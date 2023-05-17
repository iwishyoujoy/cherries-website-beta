import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function NavBar(props) {
    const [isSticky, setSticky] = useState(true);

    return (
        <AppContainer>
            <div className={"navbar " + (isSticky ? "sticky" : "")}>
                <div className="navbar-logo">
                    <Link className="logo" to="/cherries-website-beta">Cherries 🍒</Link>
                </div>
                <div className="navbar-list">
                    <div className="navbar-list-router">
                        {props.navigation.map(
                            (item, key) => (
                                <Link key={key} className="nav-link" to={item.link}>{item.title}</Link>
                            )
                        )}
                        <button className="navbar-cart-button pointer">
                            <svg className="navbar-cart-img" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
                            <div className="navbar-cart-counter">3</div>
                        </button>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default NavBar;