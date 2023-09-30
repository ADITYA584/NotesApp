import React from "react";
import Notes from "./Notes";
import Createnotes from "./Createnotes";
import { ToastContainer } from 'react-toastify';

const Main = () => {
  return (
    <div>
      <div className="containers">
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Notes />

        <Createnotes />
        {/* <UpdatePopup/> */}
      </div>
    </div>
  );
};

export default Main;
