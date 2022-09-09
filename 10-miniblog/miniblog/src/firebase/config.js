
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQzmpi-4nB8y048-z94VEVurNjMozdWEg",
  authDomain: "miniblog-d2f23.firebaseapp.com",
  projectId: "miniblog-d2f23",
  storageBucket: "miniblog-d2f23.appspot.com",
  messagingSenderId: "1042876905921",
  appId: "1:1042876905921:web:b66c95290030df5579d740",
  measurementId: "G-J5XBZE5ZXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db };