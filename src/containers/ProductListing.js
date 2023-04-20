import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts, setProducts } from '../redux/actions/productActions';

import ProductComponent from './ProductComponent';

function ProductListing() {
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").
    //         catch((err) => { console.log(err) });
    //     dispatch(setProducts(response.data));
    // };

    useEffect(()=> {
        // fetchProducts();
        dispatch(fetchProducts());
    }, []);



    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;