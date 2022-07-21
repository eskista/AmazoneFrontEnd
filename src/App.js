import React, { useEffect } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({ type: "SET_USER", user: authUser });
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div>
				<Routes>
					<Route
						path="/checkout"
						element={
							<div>
								<Header /> <Checkout />
							</div>
						}
					></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route
						path="/"
						element={
							<div>
								<Header /> <Home />
							</div>
						}
					></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
