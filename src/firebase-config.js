
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhIsh5iDlpZhA3EPX-yW3oi1kSCG0ZSkA",
  authDomain: "tasklist-d8d0a.firebaseapp.com",
  databaseURL: "https://tasklist-d8d0a-default-rtdb.firebaseio.com",
  projectId: "tasklist-d8d0a",
  storageBucket: "tasklist-d8d0a.appspot.com",
  messagingSenderId: "190521098334",
  appId: "1:190521098334:web:b7aa1c3518f811a35a74cf",
  measurementId: "G-ZFRQEEPZPD"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);