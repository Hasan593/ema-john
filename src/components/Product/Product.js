import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const {name, price, img, stock, seller} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="pik nai" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='main-button'><FontAwesomeIcon icon={faCartShopping} /> <FontAwesomeIcon icon={faCaretRight} /> Add to cart </button>
            </div>
        </div>
    );
};

export default Product;