import React, { useState } from "react";
import "./Login.css";
import bannerImage from "./images/amazon-logo_login.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => console.log(error.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src={bannerImage} />
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>

				<p>
					By continuing, you agree to Amazon's FAKE 🤣{" "}
					<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
						Conditions
					</a>{" "}
					of Use and
					<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
						{" "}
						Privacy Notice.
					</a>
				</p>

				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
