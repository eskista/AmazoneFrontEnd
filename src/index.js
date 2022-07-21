// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./Reducer";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<StateProvider initialState={initialState} reducer={reducer}>
// 			<App />
// 		</StateProvider>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
// reportWebVitals();
// *****************
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import reducer, { initialState } from "./Reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>
);
reportWebVitals();
