import React from 'react'
import "./page2.css"
const page2 = () => {
  return (
    <>
    <div className="page2">
        <h1>OUR PRODUCT</h1>
        <div className="product">
            <div className="card">
                <img src="/images/product/p1.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="card">
                <img src="/images/product/p2.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="card">
                <img src="/images/product/p3.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="card">
                <img src="/images/product/p4.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="card">
                <img src="/images/product/p5.jpeg" className="card-img-top" alt="..." />
            </div>
            <div className="card">
                <img src="/images/product/p6.jpeg" className="card-img-top" alt="..." />
            </div>
        </div>  
        <button id="btn">View More</button>
    </div>
</>
  )
}

export default page2

