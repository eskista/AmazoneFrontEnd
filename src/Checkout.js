import React, { useState } from "react";
import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="chechout__left">
				<img
					className="checkout__ad"
					alt="chechoutAdImg"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				/>
				<div>Hello,</div>
				<h2 className="checkout__title"> Your shopping Cart</h2>
				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className="chechout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
