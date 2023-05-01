import React, { useState , useEffect } from 'react';
import { Link} from "react-router-dom";
import img1 from "../../book1.jpg"
import img2 from "../../book2.jpg"
import img3 from "../../book3.jpg"

  
import axios  from 'axios';
const Books = () => {
    const [books,setbooks] = useState([])
     useEffect(()=>{

        const fetchAllBooks = async () => {
            try{
                // const res = await axios.get("https://dummyjson.com/products")
                const res = await axios.get("http://localhost:8080/books")
                setbooks(res.data)
                console.log(res)
            }catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }
    ,[])

    const handleDelete = async (id) => {
        try{
           
            const res = await axios.delete("http://localhost:8080/book/"+id)
            window.location.reload()
            console.log(res)
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <div>
        <h1>Books shop</h1>
        {/* <img src={img1} alt="test" /> */}
        <div className="books">
            {books.map(book => (
               <div className="book"  key={book.id}>
                {book.cover && <img src={book.cover == "img1" ? img1 : img2}  alt=""/>}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <span>{book.price} $</span>
                <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className="update"><Link to={`/edit/${book.id}`}>Update</Link></button>
               </div> 
            ))}
        </div>
        <button className='add'><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books
