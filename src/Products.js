import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Products() {

    const [product , setproduct] = useState([])

const api = ()=>{
    axios.get('https://fakestoreapi.com/products').then((d)=>{
        setproduct(d.data)
        console.log(d.data);
        
    })
}

useEffect(()=>{
api()
},[])


  return (
    <div>
        <Nav/>

<div className='container'>
    <div className='row'>
     <div className='col-md-12 d-flex justify-content-center'>
       <h1> Welcome to <span className='text-success fw-bold'> E-Com </span></h1>
     </div>        
    </div>
     <div className='row'>
     <div className='col-md-12 d-flex justify-content-center'>
       <h4> Enjoy the  <span className='text-success fw-bold'> variety of our Products </span></h4>
     </div>        
    </div>

<div className='row mb-5'>
  {product.map((d) => {
    return (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' id={d.id} key={d.id}>
        <div className="card h-100">
          <img
            src={d.image}
            className="card-img-top p-2"
            style={{ height: '200px', objectFit: 'contain' }}
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <p className="card-title">{d.title}</p>
            <Link to={`details/${d.id}`} className="btn btn-primary mt-auto">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  })}
</div>



</div>





      <Footer/>
    </div>
  )
}
