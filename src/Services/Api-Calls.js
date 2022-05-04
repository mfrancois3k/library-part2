import axios from "axios";


export const getAllBooks = () => {
  let response = axios
    .get("http://localhost:3001/books")
    return response
    console.log(response);
}

export const getSingleBookId = (id) => {
  let response = axios.get(`http://localhost:3001/book/${id}`);
  return response;
}


export const createBook = (newValue) => {
  let response = axios({
  url : 'http://localhost:3001/book',
  method : 'POST',
  data : newValue     
});
  return response;
}

export const deleteBook = (id) => {
  let response = axios({
  url: `http://localhost:3001/book/${id}`,
  method: 'DELETE'
});
  return response;
}

export const editBook = (id, editValue) => {
  let response = axios({
  url: `http://localhost:3001/books/${id}`,
  method: 'PUT',
  data: editValue
})
  return response;
}