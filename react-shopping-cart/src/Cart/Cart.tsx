import CartItem from '../CarItem/CartItem';

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../App";

type Props = {
    CartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ CartItems, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {CartItem.length === 0 && <p>No items in cart.</p>}
            {CartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart;