import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button
                    className="btn-cart"
                    onClick={() => props.handleAddToCart(props.product)}
                >{element} add to cart</button>
            </div>
        </div>
    )
}

export default Product;