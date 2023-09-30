import React, { useEffect } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { Button, ToastContainer } from "react-bootstrap";
import useFetchData from "./useFetchData";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase-config";
import { toast } from "react-toastify";

const notesparent = document.querySelector(".notes_section");
// const notify = () => toast('Database cannot be Updated due to Firebase Quota limit Exceded');



const  updateNote = async (id,onClose)=>{
    console.log(document.querySelector('.textarea').value)
    onClose()
     try{
        const noteDoc = doc(db,"Notes",id)
    const updatedNote =  document.querySelector('.textarea').value
     const Message =  {Message : updatedNote }
        await updateDoc(noteDoc,Message)
     }
     catch(error){
        console.log(error)
     }

    console.log('working')
}


const UpdatePopup = (props) => {
//   useEffect(() => {
//     console.log(props.id);
//   }, []);

  return (
    <div className="centerdiv">
      <CloseButton className="close" variant="black" onClick={props.onClose} />
      <p>Update Note</p>
      <label>
        <textarea
          className="textarea input"
          placeholder="New Note"
          name="Message"
          // onChange={handelChange}
        />
      </label>
      <Button
        className="submit_update"
        type="primary"
        onClick={()=>{updateNote(props.id,props.onClose)}}
      >
        Submit
      </Button>
    </div>
  );
};

export default UpdatePopup;
