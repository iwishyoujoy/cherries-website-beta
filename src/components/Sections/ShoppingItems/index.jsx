import storeItems from "../../../data/cart-items.json";
import AppContainer from "../../AppContainer";
import "./index.scoped.css";
import StoreItem from "../StoreItem";
function ShoppingItems(){
    return (<AppContainer>
        <div className="shopping-list-container">
            {storeItems.map(item => (
                <div className="shopping-list-item">
                    <StoreItem {...item}/>
                </div>
            ))}
        </div>
    </AppContainer>);
}
export default ShoppingItems;