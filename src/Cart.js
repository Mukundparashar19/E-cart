import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'



export default function Cart() {

let k = JSON.parse(localStorage.getItem('kart'))

const [uk ,setuk] = useState([])

const del = (id)=>{
const updatedCart = k.filter((item)=> item.id !== id)
setuk(updatedCart)
localStorage.setItem('kart',JSON.stringify(updatedCart))
}

useEffect(()=>{
    const sk = JSON.parse(localStorage.getItem('kart')) || []
    setuk(sk)
},[])

  return (
    <div>
        <Nav/>

 <div className="container my-5">
  {uk.length === 0 ? (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
      <h2 className="text-warning text-center">Your Cart is Empty</h2>
    </div>
  ) : (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {uk.map((d) => (
        <div className="col" key={d.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={d.image}
              className="card-img-top p-3"
              style={{ height: "200px", objectFit: "contain" }}
              alt={d.title}
            />
            <div className="card-body d-flex flex-column">
              <p className="card-title mb-3" style={{ fontSize: "0.9rem", flexGrow: 1 }}>{d.title}</p>
              <button onClick={() => del(d.id)} className="btn btn-danger mt-auto">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


      <Footer/>
    </div>
  )
}
