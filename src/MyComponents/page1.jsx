import React from 'react'
import "./page1.css"
const page1 = () => {
    return (
        <>
            <div className="page1">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <div className="bg-details1">
                                <h1 data-aos="zoom-in">OMG! It's here!</h1>
                                <p>
                                    Celebrate the unstoppable energy of K-Pop fans with Coca-Cola®
                                    K-Wave, the latest from Coca-Cola Creations.
                                </p>
                                <button>Learn More</button>
                            </div>
                            <img src="./images/bg1.webp" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="bg-details2">
                                <h1>Play everyday for your chance at thousands of prizes.</h1>
                                <button>Learn More</button>
                            </div>
                            <img src="./images/bg2.webp" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="bg-details3">
                                <h1>Coca-Cola® with a twist</h1>
                                <p>An unexpected burst of raspberry and spiced flavors.</p>
                                <button>Learn More</button>
                            </div>
                            <img src="./images/bg3.webp" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default page1
