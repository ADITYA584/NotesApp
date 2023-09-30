import React from "react";
import Avatar from "./Avatar";
import Button from "react-bootstrap/Button";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase-config";
import { toast } from "react-toastify";


const deleteNote = async (id)=>{
 try {
  const userDoc = doc(db,"Notes",id)
   await deleteDoc(userDoc)
  
 } catch (error) {
  toast(`${error}`)
 } 
}



const Notecard = (props) => {
  return (
    <div className="single_card">
      <div className="main">
        <h4 className="title">{props.Subject}</h4>
        <p className="message">{props.message}</p>
      </div>
      <Avatar
        username={`${props.name}`}
        bgColor="steelblue"
        textColor="white"
        borderColor="steelblue"
      />
      <div className="note_buttons">
        <Button variant="success" size="lg">
          Pin
        </Button>
        <Button variant="primary" size="lg" onClick={props.onOpen}>
          Edit
        </Button>
        <Button variant="danger" size="lg" onClick={()=>{deleteNote(props.id)}}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Notecard;
