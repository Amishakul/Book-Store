import React, {useContext} from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from '../../../App';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';

const CartItemsContainer = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const stripeKey = 'pk_test_51OV7Z7SA5gufW2lsE2e3hQSW1lGY2SeXb2lEIDOmaWM4d6KBu8J4CVy57FsZMDxTlwnLp0Llc8PUO4tBTk2gujfa003gFDKHof';
    const navigate = useNavigate();

    const onToken = (token) => {
        console.log(token);
        alert('Your Payment has been processed');
        navigate('/books');
    }

    return (
        <section className="cart-items-container">
            <div className="container">
                {totalAmount === 0 ? (
                    <h2>Currently your cart is empty</h2>
                ):(
                    <React.Fragment>
                        <h2>Cart</h2>

                        {cartItems.map((item) => (
                            <CartItemCard key={item.id} bookData={item} />
                        ))}

                        <h2>Total Amount = &#8377;{totalAmount}</h2>

                        <StripeCheckout
                            name="Book Checkout"
                            description="Please fill in the details below"
                            amount={totalAmount * 100}
                            currency="INR"
                            stripeKey={stripeKey}
                            token={onToken}
                            billingAddress
                        >
                            <button className="button-primary">Proceed to Checkout</button>
                        </StripeCheckout>
                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default CartItemsContainer;