import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATXloOX17LVXFAPVXIVR5zGU9sV7b186Q",
  authDomain: "tienda-sidequest.firebaseapp.com",
  projectId: "tienda-sidequest",
  storageBucket: "tienda-sidequest.appspot.com",
  messagingSenderId: "835987967756",
  appId: "1:835987967756:web:956e3057262f66c2f1c329"
};


  const app = initializeApp(firebaseConfig);

  export const basededatos = getFirestore(app);
  