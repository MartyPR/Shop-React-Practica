import React ,{useContext} from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../context/Appcontex';

const OrderItem = ({ product }) => {
	const{removeFromCart}=useContext(AppContext);
	const handleRemove = item=>{
		removeFromCart(item);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} onClick={()=>handleRemove(product)} alt="close" />
		</div>
	);
}

export default OrderItem;