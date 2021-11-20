import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxbQr7PkrXGOeNR2rlqkH3V7a6pBiS77M",
  authDomain: "producthunt-e7c0d.firebaseapp.com",
  projectId: "producthunt-e7c0d",
  storageBucket: "producthunt-e7c0d.appspot.com",
  messagingSenderId: "855391444469",
  appId: "1:855391444469:web:9d23fcbc316763dde9d4bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
