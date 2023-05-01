import React, { useState  } from 'react'
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'

function Update() {
    const [book,setBook] = useState({
        title:"",
        description:"",
        cover:"",
        price:null
    })
    const navigate = useNavigate(); 
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];
    const handelChange = (e) => {
        setBook((prev) => ({...prev ,[e.target.name]: e.target.value}));
    }
    const handleClick = async e => {
        e.preventDefault()
        try{
             await axios.put("http://localhost:8080/book/"+bookId,book)
            navigate("/books")
        }catch(err) {
            console.log(err)
        }
    }
    console.log(book)
  return (
    <div className="form">
        <h1>Update the book</h1>
        <input type="text" placeholder='title' onChange={handelChange} name="title" />
        <input type="text" placeholder='description'  onChange={handelChange} name="description" />
        <input type="text" placeholder='img'  onChange={handelChange} name="cover" />
        <input type="number" placeholder='book price'  onChange={handelChange} name="price" />
        <button className="fombutton" onClick={handleClick}>Update</button>
        
    </div>
  )
}

export default Update
