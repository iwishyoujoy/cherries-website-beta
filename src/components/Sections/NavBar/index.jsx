import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import {useEffect, useState} from "react";
function NavBar(props) {
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    const [isSticky, setSticky] = useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 0){
            setSticky(true);
        }
        else{
            setSticky(false);
        }
    }

    return (
        <AppContainer>
            <div className={"navbar " + (isSticky ? "sticky" : "")}>
                <div className="navbar-logo">
                    <a className="logo" href="/">Cherries 🍒</a>
                </div>
                <div className="navbar-list">
                    <div className="navbar-list-router">
                        {props.navigation.map(
                            (item, key) => (
                                <a key={key} className="nav-link" href={item.link}>{item.title}</a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default NavBar;