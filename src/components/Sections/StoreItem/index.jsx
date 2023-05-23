import "./index.scoped.css";
import {formatCurrency} from "../../../utilities/formatCurrency";
import {UseShoppingCart} from "../../../context/ShoppingCartContext.tsx";
function StoreItem({id, name, price, size, imgUrl}){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = UseShoppingCart()

    const quantity = getItemQuantity(id);
    return (
        <div className="store-item-container" id={"store-item-" + id}>
            <img className="store-item-img" src={process.env.PUBLIC_URL + imgUrl}/>
            <div className="store-item-name">{name}</div>
            <div className="store-item-info">
                <div className="store-item-about">
                    <div className="store-item-size">{size}</div>
                    <div className="store-item-price">{formatCurrency(price)}</div>
                </div>
                <div className="store-item-button-container">
                    { quantity === 0 ? (
                        <button className="store-item-button pointer" onClick={() => increaseCartQuantity(id)}>
                            <svg className="store-item-button-img" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
                        </button>
                    ) : (
                        <div className="store-item-alt-button-container">
                            <div className="store-item-alt-button-add">
                                <button className="store-item-alt-button store-item-arrow pointer" onClick={() => decreaseCartQuantity(id)}>-</button>
                                <div className="store-item-alt-button-text">{quantity}</div>
                                <button className="store-item-alt-button store-item-arrow pointer" onClick={() => increaseCartQuantity(id)}>+</button>
                            </div>
                            <div className="store-item-alt-button-remove">
                                <button className="store-item-alt-button pointer" onClick={() => removeFromCart(id)}>Удалить</button>
                            </div>

                        </div>
                    )}
                    <button className="store-item-button pointer">
                        <svg className="store-item-button-img" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StoreItem;