import React, { useState  } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Add() {
    const [book,setBook] = useState({
        title:"",
        description:"",
        cover:"",
        price:null
    })
    const navigate = useNavigate()
   
    const handelChange = (e) => {
        setBook((prev) => ({...prev ,[e.target.name]: e.target.value}));
    }
    const handleClick = async e => {
        e.preventDefault()
        try{
           await axios.post("http://localhost:8080/book" ,book)
            navigate("/books")
        }catch(err) {
            console.log(err)
        }
    }
    console.log(book)
  return (
<div className="form">
        <h1>Add new book</h1>
        <input type="text" placeholder='title' onChange={handelChange} name="title" />
        <input type="text" placeholder='description'  onChange={handelChange} name="description" />
        <input type="text" placeholder='img'  onChange={handelChange} name="cover" />
        <input type="number" placeholder='book price'  onChange={handelChange} name="price" />
        <button className="fombutton" onClick={handleClick}>add</button>
        
    </div>
  )
}

export default Add
