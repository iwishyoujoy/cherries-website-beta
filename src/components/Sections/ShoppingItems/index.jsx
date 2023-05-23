import storeItems from "../../../data/cart-items.json";
import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import StoreItem from "../StoreItem";
import Filters from "../FIlters";
import Sorters from "../Sorters";
function ShoppingItems(){
    return (<AppContainer>
        <div className="shopping-page-container">
            <Filters />
            <div className="shopping-page-right-container">
                <Sorters />
                <div className="shopping-list-container">
                    {storeItems.map(item => (
                        <div className="shopping-list-item">
                            <StoreItem {...item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AppContainer>);
}
export default ShoppingItems;