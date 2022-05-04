import { useEffect, useState } from "react";
import { getSingleBookId } from "../Services/Api-Calls";
import Nav from "../shared/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [book, setBook] = useState({});
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getSingleBookId(id).then((res) => setBook(res.data.book));
  }, []);

  console.log(book);

  const destroy = () => {
    axios({
      url: `http://localhost:3001/books/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <>
      <Nav />

      <h2>{book.title}</h2>

      <img src={book.imageLink} />
      <p>ISBN: {book.ISBN}</p>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Genres: {JSON.stringify(book.genres)}</p>
      <NavLink to={`/book-info/${id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={() => destroy()}>Delete Item</button>
    </>
  );
};
export default BookInfo;

// append text on to a body an loop the alphabet 

// build a chrome extension app to scan text and add it to a list

function copyTextScreen() {
  const text = document.getElementById("text");
  text.select();
  document.execCommand("copy");
}

  
}


