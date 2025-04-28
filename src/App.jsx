import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from "../data.json"
import StudentCard from './components/StudentCard'
import axios from "axios";
import ProductCard from './components/ProductCard'
function App() {
  const [students,setStudents] = useState(data);
  const [products,setProducts ] = useState([])
  async function getData() {
    try {
      const data = await axios("https://fakestoreapi.com/products");
      console.log(data.data)
      setProducts(data.data);
    } catch (error) {
      console.log(error);
      alert("something went wrong")
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
   <>
   {
      /*students.map((student)=>(
        <StudentCard data = {student} />
      ))*/

        products.map((product)=>(
        <ProductCard data={product} />
        ))
   }
   </>
      
  )
}

export default App
