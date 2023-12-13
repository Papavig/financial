import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdNx74v-jUY_Hn3PjqHD48QAE2Fv4XfYg",
  authDomain: "financial-vig.firebaseapp.com",
  projectId: "financial-vig",
  storageBucket: "financial-vig.appspot.com",
  messagingSenderId: "422199163111",
  appId: "1:422199163111:web:c7e12466df26b65add4a42",
  measurementId: "G-ZDKX0TJ0Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
