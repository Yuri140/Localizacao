
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyB5hcN6my5n1nitG5Fhe6Oin9aO2uMDmlk",
    authDomain: "projetoa8.firebaseapp.com",
    projectId: "projetoa8",
    storageBucket: "projetoa8.appspot.com",
    messagingSenderId: "536026051099",
    appId: "1:536026051099:web:ced2e37cba5d8b569efebe",
    measurementId: "G-R94VH2NRF4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export default db;