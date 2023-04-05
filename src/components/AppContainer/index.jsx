
//необходимо для того, чтобы страничка не разъезжалась при смене масштаба
function AppContainer(props) {
    return (
        <div className="app-container">
            {props.children}
        </div >
    );
}

export default AppContainer;
