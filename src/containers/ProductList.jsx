import React from 'react';
import ProductItems from '../components/ProductItems';

import useGetProducts from '../hooks/useGetProduct.js';
import '../styles/ProductList.scss';


const API = ' http://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const products = useGetProducts(API)

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					< ProductItems product={product} key={product.id} />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;