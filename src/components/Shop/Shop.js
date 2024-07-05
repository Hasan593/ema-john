import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handle = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className="porduct-container">
                {
                    products.map(pd => <Product
                        showButton={true}
                        handle={handle}
                        key={pd.key}
                        product={pd}
                        ></Product>)
                }
            </div>
            <div className="cart-contaitenr">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;