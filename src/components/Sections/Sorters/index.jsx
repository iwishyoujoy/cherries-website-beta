import "./index.scoped.css"
function Sorters(){
    return (
        <div className="sorters-container">
            <div className="sorters-button-container">
                {/*<button className="sorter-button pointer">Новое</button>*/}
                {/*<button className="sorter-button pointer">Выбор Cherries</button>*/}
            </div>
            <div className="sorter-single-container">
                <div>Сортировать</div>
                <div className="filter-single-svg-container pointer">
                    <svg className="filter-single-arrow" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z"/></svg>
                </div>
            </div>
        </div>
    );
}

export default Sorters;