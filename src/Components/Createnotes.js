import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import db from "../firebase-config";
import { collection } from "firebase/firestore";
import useFetchData from "./useFetchData";
import { toast } from "react-toastify";

const Createnote = () => {
  const [{notes}, getNotes] = useFetchData();
  const [formdata, setformdata] = useState({
    Name: "",
    Subject: "",
    Message: "",
  });
  console.log(notes)
  const notesCollectionRef = collection(db, "Notes");

  function handelChange(event) {
    setformdata((prevformdata) => {
      return {
        ...prevformdata,
        [event.target.name]: event.target.value,
      };
    });
  }

  const sendNote = async () => {
    

    try {
      await addDoc(notesCollectionRef, formdata)
    } catch (error) {
      toast({error})
    }
    
    document.querySelector('.Fullname').value = ""
    document.querySelector('.Subject').value = ""
    document.querySelector('.textarea').value = ""
    getNotes();
  };

  return (
    <div className="createsection">
      <h1>Create Note</h1>
      <form className="form">
        <label>
          Name :
          <input
            className="Fullname input"
            placeholder="Full Name"
            name="Name"
            onChange={handelChange}
          />
        </label>

        <label>
          Title :
          <input
            className="Subject input"
            placeholder="Subject"
            name="Subject"
            onChange={handelChange}
          />
        </label>

        <label>
          Note :
          <textarea
            className="textarea input"
            placeholder="Note"
            name="Message"
            onChange={handelChange}
          />
        </label>
        <div className="d-grid submit">
          <Button
            onClick={sendNote}
            className="d grid"
            variant="danger"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Createnote;
