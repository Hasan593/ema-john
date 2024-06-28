import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    return (
        <div className='shop-container'>
            <div className="porduct-container">
                {
                    products.map(pd => <Product key={pd.key} product={pd}></Product>)
                }
            </div>
            <div className="cart-contaitenr">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;