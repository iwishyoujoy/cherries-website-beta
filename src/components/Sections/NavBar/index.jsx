import AppContainer from "../../AppContainer";
import "./index.scoped.css";
function NavBar(props) {
    return (
        <AppContainer>
            <div className="navbar">
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