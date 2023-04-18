import "./index.scoped.css";
function CategoryHeader(props){
    return (
        <div className="category-header">
            <div className="category-header-small">
                Главная > {props.headerGeneral} > {props.headerSpecific}
            </div>
            <div className="category-header-big">
                {props.headerSpecific}
            </div>
            <div className="category-header-count">
                {props.count} товара
            </div>
        </div>
    );
}

export default CategoryHeader;