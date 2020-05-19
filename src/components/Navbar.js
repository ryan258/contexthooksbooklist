import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  // We consumer the context
  // Destructure what we want out of the context we're using.
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      {/* output data from that context */}
      <p>Currently you have {books.length} books to get through... </p>
    </div>
  );
};

export default Navbar;
