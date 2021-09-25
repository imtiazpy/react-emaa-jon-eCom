import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [filteredPd, setFilteredPd] = useState([])
    // console.log(cart)
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredPd(data)
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        console.log(searchText)
        const matchedProduct = products.filter(pd => pd.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredPd(matchedProduct);
    }

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <div className="search">
                <input
                    onChange={handleSearch}
                    className="search-field"
                    type="text"
                    placeholder="Type your search" />
                <a className="cart-icon" href="">{element}</a>
            </div>
            <div className="shop-container">
                <div className="products">
                    {
                        filteredPd.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart} />
                        )
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    )
}

export default Shop;