
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: "notesapp-database.firebaseapp.com",
//     projectId: "notesapp-database",
//     storageBucket: "notesapp-database.appspot.com",
//     messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
//   };

  
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "notesappdata-687ae.firebaseapp.com",
//   projectId: "notesappdata-687ae",
//   storageBucket: "notesappdata-687ae.appspot.com",
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyAzq-XC2la4xp2eLfECl6hd4uAzCvyj3x0",
//   authDomain: "notessss.firebaseapp.com",
//   projectId: "notessss",
//   storageBucket: "notessss.appspot.com",
//   messagingSenderId: "689286912692",
//   appId: "1:689286912692:web:fe389ee38a000512b015e1",
//   measurementId: "G-Z3864DHDM2"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyB2-Mv6uaPpYEX385MrKYQGWsPubQH-dgg",
//   authDomain: "notesapp-1f659.firebaseapp.com",
//   projectId: "notesapp-1f659",
//   storageBucket: "notesapp-1f659.appspot.com",
//   messagingSenderId: "598648902660",
//   appId: "1:598648902660:web:b255e2b2d57a9ee1c5d151",
//   measurementId: "G-5BWX6LVNLP"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "notesappdata-9edf0.firebaseapp.com",
  projectId: "notesappdata-9edf0",
  storageBucket: "notesappdata-9edf0.appspot.com",
  messagingSenderId:process.env.REACT_APP_MESSAGE_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export default db