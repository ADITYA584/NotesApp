import React from "react"
import Avatar from "./Avatar"
import Button from "react-bootstrap/Button"


const Note = () =>{

    return(
        <div>
            <div className="singlecard">
                <h4>Header</h4>
                <div className="message">message</div>
                <Avatar/>
            </div>
            <div className="Notebutton">
                <Button variant="Primary" color="blue">Edit</Button>
                <Button variant="Success">Pin</Button>
                <Button variant="Danger"></Button>
            </div>
        </div>
    )

}