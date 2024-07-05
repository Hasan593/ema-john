import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Product = (props) => {
    console.log(props)
    const {name, price, img, stock, seller, key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="pik nai" />
            </div>
            <div>
                <h4 className='product-name'><Link to={'/product/'+ key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showButton === true && <button
                className='main-button'
                onClick={() => props.handle(props.product)}
                >
                    <FontAwesomeIcon icon={faCartShopping} /> <FontAwesomeIcon icon={faCaretRight} /> Add to cart 
                </button>}
            </div>
        </div>
    );
};

export default Product;