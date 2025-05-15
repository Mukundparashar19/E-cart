import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
  import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetails() {

    const {id} = useParams()
    const [pd , setpd] = useState({})

    const dapi = ()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((d)=>{
            setpd(d.data)
            console.log(d.data);
            
        })
    }

    // addtocart
    
    const atc = ()=>{
        let x = JSON.parse(localStorage.getItem('kart')) || []
         x.push(pd)
        localStorage.setItem('kart',JSON.stringify(x))
        notify()
    
    }



useEffect(()=>{
dapi()
},[])    

    const notify = () => toast.success("Item added to Cart",{autoClose: 500,});

  return (
    <div>
        <Nav/>

<div className="container mt-5">
  <div className="row gy-4">
    {/* Product Image */}
    <div className="col-12 col-md-6 text-center">
      <img
        src={pd.image}
        alt="Product"
        className="img-fluid rounded mb-3"
        style={{ maxHeight: '400px', objectFit: 'contain' }}
      />
    </div>

    {/* Product Details */}
    <div className="col-12 col-md-6">
      <h2 className="mb-3">{pd.title}</h2>
      <p className="text-muted mb-4">SKU: WH1000XM4</p>
      <div className="mb-3">
        <span className="h4 me-2">${pd.price}</span>
        <span className="text-muted"><s>$399.99</s></span>
      </div>
      <div className="mb-3">
        <span className="ms-2">{pd.rating?.rate} (120 reviews)</span>
        <span className="ms-2">{pd.rating?.count} Available</span>
      </div>
      <p className="mb-4">{pd.description}</p>

    <div className="row">
  <div className="col-12 col-sm-auto">
    <button
      onClick={atc}
      className="btn btn-primary btn-lg mb-3 me-sm-2 w-100"
    >
      <i className="bi bi-cart-plus"></i> Add to Cart
    </button>
  </div>
</div>

      <div className="mt-4">
        <h5>Product type: {pd.category}</h5>
      </div>

      <ToastContainer />
    </div>
  </div>
</div>

<Footer/>

    </div>
  )
}
