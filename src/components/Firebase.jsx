import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0bw8bxDW5cLGOM6KLJGKKRqlaDBvBucs",
  authDomain: "ecommerse-reactjs.firebaseapp.com",
  projectId: "ecommerse-reactjs",
  storageBucket: "ecommerse-reactjs.appspot.com",
  messagingSenderId: "625032031218",
  appId: "1:625032031218:web:8a9b7f2af8c9029df4196b",
  measurementId: "G-6DW8CYYG6R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);