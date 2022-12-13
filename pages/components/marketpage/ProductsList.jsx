import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectsProducts } from '../store/feautes/Products.slice';
import ProductsForm from './ProductsForm';

const ProductsList = () => {
    
    const { data: products } = useSelector(selectsProducts);
    const list = products.map((product) => <ProductsForm key={product.id} product={product} />)
    return <div>{list}</div>
}

export default ProductsList