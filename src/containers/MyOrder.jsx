import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/Appcontex.js';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumaTotal =()=>{
		const reducer = (accumalator,currentValue)=> accumalator+ currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}
	

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumaTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;