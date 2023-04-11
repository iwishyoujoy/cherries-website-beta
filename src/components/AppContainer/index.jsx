import "./index.scoped.css";
function AppContainer(props) {
    return (
        <div className="app-container">
            {props.children}
        </div >
    );
}

export default AppContainer;
