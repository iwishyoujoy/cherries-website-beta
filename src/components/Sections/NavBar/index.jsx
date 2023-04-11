import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function NavBar(props) {

    // useEffect(() => {
    //     window.addEventListener('scroll',handleScroll)
    // })

    const [isSticky, setSticky] = useState(true);
    // const handleScroll=() => {
    //     const offset=window.scrollY;
    //     if(offset > 0){
    //         setSticky(true);
    //     }
    //     else{
    //         setSticky(false);
    //     }
    // }

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
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default NavBar;