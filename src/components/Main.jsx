import React from 'react'

export default function Main() {
  return (
    <>  
    <div className="container-main">
      <div className="bold-texts">
      <h1>YOUR FEET </h1>
      <h1>DESERVE</h1>
      <h1>THE BEST</h1>
     </div>

     <div className="img-side">
      <img src="shoe_image.svg" alt="" />
     </div>
     
    </div>
    <div className="paragraph">
      <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
       HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
      THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
      SHOES.</p>
    </div>
    <div className='btns'>
     <button className='shop-now'>Shop Now</button>
     <button className='category'>Category</button>
    </div>

   <div className="shop-app">
    <p>Also Available on</p>
    <img src="flipkart.svg" alt="" />
    <img src="amazon.svg" alt="" />
   </div>
    </>
  )
}