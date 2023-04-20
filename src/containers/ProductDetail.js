import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { removeSelectedProduct } from '../redux/actions/productActions';

function ProductDetail() {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    // const fetchProductDetail = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).
    //         catch((err) => console.log(err));
    //     console.log(response.data);
    //     dispatch(selectedProduct(response.data));
    // }



    useEffect(()=>{
        if(productId && productId !== "")
            dispatch(selectedProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    console.log(product);


    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={product.image} />
                            </div>
                            <div className="column rp">
                                <h1>{product.title}</h1>
                                <h2>
                                        <a className="ui teal tag label" alt={product.title}>${product.price}</a>
                                </h2>
                                <h3 className="ui brown block header">{product.category}</h3>
                                <p>{product.description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail