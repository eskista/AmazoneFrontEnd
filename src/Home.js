import React from "react";
import "./Home.css";
import bannerImage from "./images/banner-1.jpg";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src={bannerImage} alt="banner-image" />
				<div className="home__row">
					<Product
						id="123"
						title="3 Pk. Pine-Sol Lavender Scent Multi-Surface Cleaner 48 Fl. Oz (144 Fl. Oz Total)3 Pk. Pine-Sol Lavender Scent Multi-Surface Cleaner"
						price={23.93}
						rating={5}
						image="https://m.media-amazon.com/images/I/81u4FARti8L._AC_SY240_.jpg"
					/>
					<Product
						id="1234"
						title="Dual Sided Leather Desk Mat, Desk Writing Mat for Office/Home/Work/Cubicle (Blue/Yellow)"
						price={11.95}
						rating={3}
						image="https://m.media-amazon.com/images/I/61NUzfn8CaS._AC_SY240_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12345"
						title="PlayStation DualSense Wireless controller - Galactic Purple PlayStation DualSense Wireless Controller - Galactic Purple"
						price={60.26}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/61Uh8NFDzsL._AC_UL450_SR450,320_.jpg"
					/>
					<Product
						id="12345678"
						title="(24 Pack) Sticky Notes 3x3 in Post Bright Stickies Colorful Super Sticking Power Memo"
						price={15.19}
						rating={4}
						image="https://m.media-amazon.com/images/I/61LWcOmb0jL._AC_SL1500_.jpg"
					/>

					<Product
						id="1234567"
						title="Clore Automotive Jump-N-Carry JNC660 1700 Peak Amp 12 Volt Jump Starter , Blue"
						price={149}
						rating={5}
						image="https://m.media-amazon.com/images/I/71x8G6clZDL._AC_SY240_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						// id="12345678"
						// title="Signature Fitness Set of 2 Neoprene Dumbbell Hand Weights, Anti-Slip, Anti-roll, Hex Shape Colorful"
						// price={8.98}
						// rating={4.5}
						// image="https://images-na.ssl-images-amazon.com/images/I/51R0W2pp2jL._AC_UL604_SR604,400_.jpg"

						// id="123456789"
						// title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Purple (5th Generation)"
						// price={749.99}
						// rating={4.5}
						// image="https://m.media-amazon.com/images/I/61k05QwLuML._AC_UY218_.jpg"
						id="1234567891"
						title="COLZER Professional Countertop Blender with 2200-Watt Base, Smoothie Blender ,Built-in Timer ,High Power Blender 2L Cups for Frozen Drinks ,Shakes and Smoothies"
						price={99.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81tgqKaufNL._AC_SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
