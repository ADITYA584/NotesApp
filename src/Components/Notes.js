import React from "react";
import Notecard from "./Notecard";
import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";
import ReactPaginate from "react-paginate";
import UpdatePopup from "./UpdatePopup";

const Notes = () => {
  const [{ notes }, getNotes] = useFetchData();
  getNotes();
  const [show, setShow] = useState(false); ////to show update window
////pagination////////
  const [pageNumber, setPageNUmber] = useState(0);
  const userPerPage = 6;
  const PageVisited = pageNumber * userPerPage;
  const [id, setId] = useState();
  const displayUser = notes
    .slice(PageVisited, PageVisited + userPerPage)
    .map((note) => {
      return (
        <Notecard
          id={note.id}
          key={note.id}
          Subject={note.Subject}
          name={note.Name}
          message={note.Message}
          onOpen={() => {
            setShow(true);
            setId(note.id);
          }}
          onClose={() => setShow(false)}
        />
      );
    });

  const pageCount = Math.ceil(notes.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNUmber(selected);
  };

  return (

    <div className="section_cover">
        <div className="notes_section">
          {show && <div className="overlay"></div>}
          {show && (
            <UpdatePopup id={id} onClose={() => setShow(false)}></UpdatePopup>
          )}
          {displayUser}
        
        </div>
        <ReactPaginate
      className="paginationBttns different"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Notes;
