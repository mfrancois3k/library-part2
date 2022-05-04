import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  getAllBooks, editBook } from '../Services/Api-Calls';
import Layout from "../shared/Layout";
import BookForm from '../shared/BookForm';
import axios from 'axios';

function BookEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({
        genres: [],
        title: "",
        author: "",
        year: "",
        ISBN: "",
        imageLink: "",
    });


    const [updated, setUpdated] = useState(false)
    
    const fetchData = async () => {
        try {
            // const response = await getAllBooks();
            const response = await axios(`http://localhost:3001/books`)
            setBook(response)
            
        } catch (error) {
            console.log(error)
        }
            
        }
      useEffect(() => {
          fetchData()
        }, []);

        


        const handleChange = (event) => {
            const updateBook = {[ event.target.name] :  event.target.value}
            const editedBook = Object.assign(book, updateBook)
            setBook(editedBook)
        }
        
        // edit to app this a method of puting 
        // must have back tics for accesing the id 
        // rember for backed the way i make the back end is the same for the call 
        const handleSubmit = (event) => {
            event.preventDefault();


            editBook(id, book).then(() =>  setUpdated(true)).catch(console.error);
        }
     

    
      console.log(handleSubmit);

        // const handleSubmit = async (event) => {
        //     event.preventDefault();
        //     const response = await axios.put(`http://localhost:3001/book/${id}`, book);
        //     setUpdated(true);
        //     navigate('/');
        // };

        

        useEffect(() => {
            if (updated) {
              return navigate(`/`);
            }
          })
               

    return (
        <Layout>
            <h1>Edit Book</h1>
            
             <BookForm
                book={book}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                cancelPath={`/books/${id}`}
                />
        </Layout>
    )
}


export default BookEdit;