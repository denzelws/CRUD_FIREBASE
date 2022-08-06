
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFf_1RoAg0sqKtB8KqzjECmJlIp_RDNmo",
  authDomain: "hotelblog-9fa82.firebaseapp.com",
  projectId: "hotelblog-9fa82",
  storageBucket: "hotelblog-9fa82.appspot.com",
  messagingSenderId: "314541041403",
  appId: "1:314541041403:web:e2587566a778d111e8f25e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };