import React from 'react'
import "./page5.css"
const page5 = () => {
    return (
        <>
            <div className="page5">
                <section>
                    <div className="L-box1">
                        <h1>A Diet Coke for everyone</h1>
                        <p>
                            With both Diet Coke and caffeine-free Diet Coke available you can
                            always count on having the crisp, refreshing taste you know and
                            love.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="R-box1">
                        <img src="./images/product/p7.webp" alt="" />
                    </div>
                </section>
                <section>
                    <div className="L-box2">
                        <img src="./images/product/p8.webp" alt="" />
                    </div>
                    <div className="R-box2">
                        <h1>It's quench time.</h1>
                        <p>
                            With its clean, crisp, lemon-lime taste Sprite quenches your thirst
                            and helps you keep your cool.
                        </p>
                        <button>Explore Sprite</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default page5
