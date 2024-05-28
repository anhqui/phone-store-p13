import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart)
    if(amount < 1) {
        return <section className="cart">
            <header>
                <h2>your cart</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }

    return <div className="cart">
        <header>
            <h2>your cart</h2>
        </header>
        <div>
            {cartItems.map(item => <CartItem key={item.id} {...item} />)}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>total <span>{total}</span></h4>
            </div>
            <button className="btn clear-btn">clear cart</button>
        </footer>
    </div>;
};

export default CartContainer;
