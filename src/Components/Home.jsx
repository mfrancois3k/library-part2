import react from 'react'
import { useState, useEffect} from 'react'
import { getAllBooks } from '../Services/Api-Calls'
import { NavLink } from 'react-router-dom';



function Home() {
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        getAllBooks().then((res) => setBooksData(res.data))
        
    }, [])
    const bookDataMap = booksData.map((book, i) => {

              return (
                  <>
                   <img src={book.imageLink} /> 
                    <li>{book.title}</li>
                    <li>{book.author}</li>
                    <li>{book.year}</li>
                    <li>{book.genres}</li>
                    <li>{book.ISBN}</li>
                    
                    // this how this usi mongose for NavLink
                    <NavLink to={`/book-info/${book._id}`}>
                    <button >View</button>
                    
                    </NavLink>
                    
                  </>
              )
          }) 
    return (
        <>
         <ul>
           {bookDataMap}  
         </ul>
        </>
    )
}

 export default Home;
