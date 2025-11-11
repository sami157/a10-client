import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: import.meta.env.VITE_authdomain,
  projectId: import.meta.env.VITE_projectid ,
  storageBucket: import.meta.env.VITE_storagebucket ,
  messagingSenderId: import.meta.env.VITE_messagingsenderid,
  appId: import.meta.env.VITE_appid
};

const app = initializeApp(firebaseConfig);
export default app 