import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Product.css';
const Product = (props) => {
    const cartElement = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, price, seller, stock, star } = props.product;
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
                <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                <br /> <br />
                <button
                    className="btn-cart"
                    onClick={() => props.handleAddToCart(props.product)}
                >{cartElement} add to cart</button>
            </div>
        </div>
    )
}

export default Product;