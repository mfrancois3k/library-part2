import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Layout from '../shared/Layout';
import BookForm from '../shared/BookForm';
import { createBook } from '../Services/Api-Calls';



export default function ItemCreate(){
    const navigate = useNavigate();
    const [bookData,setBookData] = useState({
        title: "",
        author: "",
        year: "",
        genres:[""],
        imageLink: "",
        ISBN: ""
    })
    const [createdBookData, setCreatedBookData] = useState(null)

    const handleChange = (event) => {
        const updatedField = {[
            event.target.name]: event.target.value   
        }

        const editedItem = Object.assign(bookData, updatedField)

        setBookData(editedItem)
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        createBook(bookData)
        .then(res => {
            console.log(res.data)
            
            setCreatedBookData(res.data)

        }).catch(console.error)
        
    }

    useEffect(() => {
        if (createdBookData) {
          return navigate(`/`)
        }
      }, [createdBookData, navigate])

    return (
      <Layout>
         <BookForm 
         
         book={bookData}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}       
         cancelPath='/'
         
         />
     </Layout>
    )
}