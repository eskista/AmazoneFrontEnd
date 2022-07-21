// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCT5MGS8NB5Jiv-W0TbCfHKNkAdupXteLQ",
	authDomain: "clone2022-f504a.firebaseapp.com",
	projectId: "clone2022-f504a",
	storageBucket: "clone2022-f504a.appspot.com",
	messagingSenderId: "540152951116",
	appId: "1:540152951116:web:7e7cbc598dd86c6dba5fe9",
	measurementId: "G-L2CCBLF5SY",
};

// Initialize Firebase

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(firebaseApp);
// export { db, auth };

// ********
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
