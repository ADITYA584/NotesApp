import { useState } from "react";
import db from "../firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useFetchData() {
  const [notes, setnotes] = useState([]);

  const notesCollectionRef = collection(db, "Notes");

  const getNotes = async () => {
    const notify = () => toast('Database is not Fetched due to Firebase Quota limit Exceded');

    try{
      const data = (await getDocs(notesCollectionRef));
    setnotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    catch(error){

      {notify()}
      console.log(`The Error is ${error}`)
    }
    
  };

  return [{ notes }, getNotes];
}

export default useFetchData;
