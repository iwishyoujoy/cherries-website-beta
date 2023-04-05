//общий контейнер для всего приложения
function AppBody(props) {
    return (
        <div className="app-body">
            {props.children}
        </div>
    );
}

export default AppBody;