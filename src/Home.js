import React from "react";
import { NavLink } from "react-router-dom";

import'./Home.css';
const Home=()=>{
    return(<>
    <>
  <div className="row1">
    <div className="img-1">
      <img src="https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <ul>
        <li>
          <a href="#">Grocery</a>
        </li>
      </ul>
    </div>
    <div className="img-2">
      <img src="https://images.unsplash.com/photo-1686657377704-3a888b5473d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D" />
      <ul>
        <li>
          <a href="#">Mobile</a>
        </li>
      </ul>
    </div>
    <div className="img-3">
      <img src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" />
      <ul>
        <li>
          <a href="#">fasion</a>
        </li>
      </ul>
    </div>
    <div className="img-4">
      <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwdG9wJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D" />
      <ul>
        <li>
          <a href="#">Electronics</a>
        </li>
      </ul>
    </div>
    <div className="img-5">
      <img src="https://media.istockphoto.com/id/1399160717/photo/refrigerator-standing-in-empty-room-free-copy-space-for-text-or-other-objects-household.webp?b=1&s=170667a&w=0&k=20&c=mioFsMO2aQqMhVV0MpySE4I_2XZMHde8S67sG1n-fMs=" />
      <ul>
        <li>
          <a href="#">Home&amp;furniture</a>
        </li>
      </ul>
    </div>
    <div className="img-6">
      <img src="https://media.istockphoto.com/id/1397930723/photo/childs-electric-toy-car-on-light-blue-background.webp?b=1&s=170667a&w=0&k=20&c=33o_lTHBacU1okh7TfBYYDxy40n3a1hZAQl2xEAb4eQ=" />
      <ul>
        <li>
          <a href="#">Toys</a>
        </li>
      </ul>
    </div>
    <div className="img-7">
      <img src="https://www.lightstalking.com/wp-content/uploads/ksenia-makagonova-luk-muz-yf-unsplash-scaled.jpg" />
      <ul>
        <li>
          <a href="#">Books</a>
        </li>
      </ul>
    </div>
  </div>
  {/* ......row1 close.. */}
  <div className="border">
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.jsdelivr.net/gh/gihan667/ionic-ecommerce-app@dc6dc401c7fe541a7a1e98a2ecb6d4ec03da952b/ep4.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.spurtcommerce.com/img/ionic-big-1.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.dribbble.com/users/2659777/screenshots/9656885/media/5dd25046a1e97dc31955d5e9b63df40f.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* ......carousel close... */}
  <div className="text-border1">
    <h1>Best of Electronics</h1>
  </div>
  <div className="border-box">
    <div className="box1">
    <NavLink to="/Camera">
     
   
        <img src="https://media.istockphoto.com/id/1140393948/photo/camera-isolated-on-white-background-with-clipping-path-mirrorless-camera-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=VNuyfxklT1L7WFBwHv7sruNUzGf1AjI9dEuqfcgUWbc=" />
</NavLink>
      <ul>
        <li>
        <NavLink to="/Camera">
     Camera
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-1close.. */}
    <div className="box2">
     
     <NavLink to="/Keyboard">
   
        <img src="https://media.istockphoto.com/id/153065264/photo/computer-keyboard-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=JSbuABpcQGRpwwC8DTzL1ZE4WpHImPgolXVSL_w173I=" />
     
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Keyboard">
          keyboard 
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-2close.. */}
    <div className="box3">
    <NavLink to="/Printers">
    
    
      <img src="https://img.freepik.com/premium-photo/printer-with-white-background-high-quality-ultra-hd_889056-8674.jpg" />
      </NavLink>
      <ul>
        <li>
        <NavLink to="/Printers">
          printers 
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-3close.. */}
    <div className="box4">
      <NavLink to="/Monitor">


      <img src="https://media.istockphoto.com/id/867061880/photo/computer-monitor-with-blank-white-screen-isolated.webp?b=1&s=170667a&w=0&k=20&c=ql5TYGqo7q3l0kbGwUWJTK2ObXeX_eRpYPjmQKR0L-M=" />
     </NavLink>
      <ul>
        <li>
        <NavLink to="/Monitor">
       Monitors 
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-4close.. */}
    <div className="box5">
    <NavLink to="/Router">
       
      <img src="https://media.istockphoto.com/id/184283747/photo/wireless-network-router-isolated-on-white-w-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=HxhN8VebMfNAj0Egd_YvkshGW1QZ1mAM7dXVCbKAows=" />
       
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Router">
   Router
        </NavLink>
        </li>
      </ul>
    </div>
  </div>
  {/* ...box-5close.. */}
  <div className="text-border">
    <h1>TOYS for Kids</h1>
  </div>
  <div className="border-box1">
    <div className="box6">
    <NavLink to="/Toy_car">
      
      <img src="https://media.istockphoto.com/id/1336889958/photo/classic-model-toy-car-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=D8rwhv8-ntojZLGPARPlhwlR7qtMNxOjTySntBrayo0=" />
   
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Toy_car">
      Toy Car
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-6close.. */}
    <div className="box7">
    <NavLink to="/Small_toy">
    
      <img src="https://media.istockphoto.com/id/1386831709/photo/pink-retro-toy-car-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=AILH7FVkpzHN-CT2YSkeQPLTfr0RXyJ4Pb28wZYOl0o=" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Small_toy">
      Toy Car
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-7close.. */}
    <div className="box8">
    <NavLink to="/Toy_truck">
    
      <img src="https://media.istockphoto.com/id/120758576/photo/color-toy-car.jpg?s=612x612&w=0&k=20&c=ZBsd6JPQ3uuNGpnSDTU1OWtEVNv01tW-YZ4Is7gsno4=" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Toy_truck">
      Toy Truck
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-8close.. */}
    <div className="box9">
    <NavLink to="/Helicopter">
     
      <img src="https://img.freepik.com/premium-photo/toy-helicopter-with-red-blue-yellow-color-scheme-is-white-background_902639-21075.jpg" />
     
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Helicopter">
   Helicopter
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-9close.. */}
    <div className="box10">
    <NavLink to="/Gun">
     
      <img src="https://media.istockphoto.com/id/1309105818/photo/a-green-toy-gun-on-a-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=_IfnOHKvkNuSRRxS5YIRM0G1U9mTczOklGEqB5_P0jU=" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Gun">
Toy Gun
        </NavLink>
        </li>
      </ul>
    </div>
  </div>
  {/* ..........box10..close... */}
  <div className="border-box2">
    <div className="container">
      <div className="flex">
        <div className="box11">
        <NavLink to="/Belt">

          <img src="https://media.istockphoto.com/id/1397067200/photo/a-brown-belt-with-a-metal-buckle.webp?b=1&s=170667a&w=0&k=20&c=WhizAD097FsCPKT5b7jg6oZdRgT_ubfy_ugFP6xvwDw=" />
     
        </NavLink>
          <ul>
            <li>
            <NavLink to="/Belt">
Belt
        </NavLink>
            </li>
          </ul>
        </div>
        {/* ....box-11-close.. */}
        <div className="box12">
        <NavLink to="/White">

          <img src="https://media.istockphoto.com/id/1629114862/photo/close-up-of-white-sports-shoes-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=xJnzhqYgVTrLE_d3OB5FCAq34UBvYKCq3PgPUkrxjeM=" />
     
        </NavLink>
          <ul>
            <li>
            <NavLink to="/White">
White Shoes
        </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* ....box12.close.. */}
      <div className="flex-2">
        <div className="box13">
        <NavLink to="/Shirt">

          <img src="https://media.istockphoto.com/id/1142212002/photo/front-of-men-cut-black-t-shirt-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VZARRRO1PwMYKV9cHquulb69QwbxSEFA5S76-axY27c=" />
      
        </NavLink>
          <ul>
            <li>
            <NavLink to="/Shirt">
            T Shirt
        </NavLink>
            </li>
          </ul>
        </div>
        {/* .....box-13-close */}
        <div className="box14">
        <NavLink to="/Teddy">
           
          <img src="https://media.istockphoto.com/id/1391583205/photo/teddy-bear.jpg?s=612x612&w=0&k=20&c=spe4HRC1lsyN8SUn2CODCfN8PX1r9FTbPWaTLs23hoY=" />
        
        </NavLink>
          <ul>
            <li>
            <NavLink to="/Teddy">
            Teddy
        </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* ......box..14..close.. */}
    </div>
    {/* ...container close,... */}
    <div className="container2">
      <img src="https://www.myticketstoindia.com.au/wp-content/uploads/2022/04/Last-Minute-Flight-Deals_result.webp" />
    </div>
  </div>
  {/* .......container2 close.. */}
  <div className="text-border2">
    <h1>Trending shoes</h1>
  </div>
  <div className="border-box3">
    <div className="box15">
    <NavLink to="/Red">
      <img src="https://images-static.nykaa.com/media/catalog/product/5/c/5c5ac94RLL0072_1.jpg?tr=w-500" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Red">
            RedTape
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-15close.. */}
    <div className="box16">
    <NavLink to="/Puma">
           
      <img src="https://i5.walmartimages.com/asr/c3bf959d-8da1-44e5-8d0a-1bf8ef127417.3519e6b614a0ba932b6b5f6e02878044.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
   
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Puma">
       Puma White Sneakers
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-16close.. */}
    <div className="box17">
    <NavLink to="/Gucci">
        
      <img src="https://s.abcnews.com/images/GMA/gucci-sneakers-ht-jpo-190320_hpMain_16x9_992.jpg" />
     
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Gucci">
            Gucci Shoes
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-17close.. */}
    <div className="box18">
    <NavLink to="/Nike">
           
      <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6o5zu6JLmdA3Dp6TMYsXH749M753-U9CZGKv8UcZ2WyKrZaxUcERdzdEmVcBx_ypTIH8-GzOYiGcnZ-CiF9xrqgXO5GPIoz2BqJnjtoOUki3ztVbdKiLSIs4&usqp=CAE" />
     
        </NavLink>
      
      
      <ul>
        <li>
        <NavLink to="/Nike">
            Nike air jordan
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-18close.. */}
    <div className="box19">
    <NavLink to="/RedTape">
            
      <img src="https://assets.ajio.com/medias/sys_master/root/20230703/3D9Z/64a2d1a1a9b42d15c930b9dc/-473Wx593H-466327210-white-MODEL.jpg" />
    
        </NavLink>
      <ul>
        <li>
         
        <NavLink to="/RedTape">
         RedTape
        </NavLink>
        </li>
      </ul>
    </div>
  </div>
  {/* ...box-19close.. */}
  <div className="text-border3">
    <h1>Digital watch</h1>
  </div>
  <div className="border-box4">
    <div className="box20">
    <NavLink to="/Boat">
         
      <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/FE/ZB/IB/98343137/boat-primia-smart-watch-500x500.jpg" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Boat">
          Boat Smartwatch
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-20close.. */}
    <div className="box21">
    <NavLink to="/Realme">
         
      <img src="https://fdn2.gsmarena.com/vv/pics/realme/realme-watch-s-4.jpg" />
    
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Realme">
      Realme Smartwatch
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-21close.. */}
    <div className="box22">
    <NavLink to="/Noise">
          
      <img src="https://m.media-amazon.com/images/I/71mRLPn333L.jpg" />
     
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Noise">
        Noise Smartwatch
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-22close.. */}
    <div className="box23">
    <NavLink to="/Iwatch">
           
      <img src="https://touch360.com.sg/wp-content/uploads/2017/01/Touch360-7.png" />
   
        </NavLink>
      <ul>
        <li>
        <NavLink to="/Iwatch">
         iWatch
        </NavLink>
        </li>
      </ul>
    </div>
    {/* ...box-23close.. */}
    <div className="box24">
    <NavLink to="/Wrist">
        
      <img src="https://5.imimg.com/data5/YB/YY/CH/SELLER-59530655/bluetooth-smart-watch-250x250.jpg" />
      </NavLink>
      <ul>
        <li>
        <NavLink to="/Wrist">
     WristWatch
        </NavLink>
        </li>
      </ul>
    </div>
  </div>
</>

 



 


    
    </>
    )
}
export default Home;