import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAOi394RICSSqQjLLGIGvBLkdi6e5Iwvg",
  authDomain: "etlobo-spe-project-for-web.firebaseapp.com",
  databaseURL: "https://etlobo-spe-project-for-web-default-rtdb.firebaseio.com",
  projectId: "etlobo-spe-project-for-web",
  storageBucket: "etlobo-spe-project-for-web.appspot.com",
  messagingSenderId: "47222200779",
  appId: "1:47222200779:web:e0d61abf587eef914dfe4e",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
