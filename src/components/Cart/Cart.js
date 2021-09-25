import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);

    let quantity = 0;
    let total = 0;

    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1
        }

        quantity += product.quantity;
        total += product.price * product.quantity;

    }

    const shipping = total > 0 ? 15 : 0;
    const totalBeforeTax = total + shipping;
    const tax = total * .10;
    const subTotal = totalBeforeTax + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {quantity}</p>
            <p>Items: {total.toFixed(2)}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Total before tax: {totalBeforeTax.toFixed(2)}</p>
            <p>Estimated tax: {tax.toFixed(2)}</p>
            <h3>Order Total: {subTotal.toFixed(2)}</h3>
            <button className="btn-order">Review your order</button>
        </div>
    )
};

export default Cart;