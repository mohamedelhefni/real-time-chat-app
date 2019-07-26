import firebase from "firebase/app";
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "",
  messagingSenderId: "...",
  appId: "..."
};

/*
				======================
					put your firebase data
				=====================
*/

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
