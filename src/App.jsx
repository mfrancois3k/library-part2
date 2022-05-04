import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import BookInfo from "./Components/BookInfo";
import CreateBook from "./Components/CreateBook";
import BookEdit from "./Components/BookEdit";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-info/:id" element={<BookInfo />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/book-info/:id/edit" element={<BookEdit />} />
      </Routes>
    </div>
  );
}

export default App;