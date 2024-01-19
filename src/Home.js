import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import food from "./food.jpg";
import sg from "./logo-1.png";
import './Home.css';
const Home = () => {
const [pic,setpic]= useState(food);
const [k,setk] = useState(0);
const arr=[food];
    const navigate = useNavigate();


  return (
    <>
    
    </>
      );
};

export default Home;
{/* <div>
      <nav className="bg-gray-800 p-4 text-white flex">
      <div><img style={{height:"50px",width:"50px"}} src={sg} alt="sai" /></div>
      <div className='flex justify-evenly' style={{height:"50px",width:"750px",fontFamily:"sans-serif",fontSize:"22px",marginLeft:"700px"}}>
<div style={{height:"50px",width:"100px",paddingLeft:"15px",paddingTop:"10px"}}><a href="#home" className="hover:text-green-500">Home</a></div>
<div style={{height:"50px",width:"100px",paddingTop:"10px"}}><a href="#about" className="hover:text-green-500" >AboutUs</a></div>
<div style={{height:"50px",width:"100px",paddingTop:"10px"}}><a href="#contact" className="hover:text-green-500">Contact</a></div>
<div style={{height:"50px",width:"200px",paddingTop:"10px"}}><a href="#progress" className="hover:text-green-500">Health Progress</a></div>
      </div>
      </nav>
      <div style={{height:"500px",width:"900px",border:"1px solid black",marginTop:"125px",marginLeft:"250px",marginRight:"90px"}}>
<img style={{height:"500px",width:"900px"}} src={food} alt="bala" />
</div>

      {/* <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white">
        <h1 className="text-4xl font-bold">Preventive Health and Lifestyle</h1>
        <p>Your Wellness Journey Starts Here</p>
      </div> */}

//       <div style={{height:"250px",width:"100%",paddingTop:"200px"}}>
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold">Welcome to Preventive Health and Lifestyle</h2>
//           <p className="text-lg">Embark on a transformative journey to better health. Our personalized diet and yoga plans are crafted just for you, guiding you towards a healthier and happier life.</p>
//           <button onClick={()=>{navigate('/BloodReport')}}>   <a href="#about" className="bg-green-500 text-white px-8 py-4 text-xl rounded inline-block mt-8 hover:bg-green-600">Get Started</a></button>
//         </div>
//         </div>

//      <div style={{paddingTop:"260px"}}>
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold">About Us</h2>
//           <p>
//             Preventive Health and Lifestyle is dedicated to providing personalized health insights to empower individuals on their unique wellness journeys. We believe in the transformative power of knowledge, preventive measures, and a personalized approach to health.
//           </p>
//           <button onClick={()=>{navigate('/aboutus')}}>  <a href="#about" className="bg-green-500 text-white px-8 py-4 text-xl rounded inline-block mt-8 hover:bg-green-600">Learn More</a></button>
//         </div>
//         </div>

//       <div style={{paddingTop:"80px"}}>
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold">Contact Us</h2>
//           <p>We'd love to hear from you! Reach out for personalized assistance and guidance on your wellness journey.</p>
//           <button onClick={()=>{navigate('/contactus')}}> <a href="#contact" className="bg-green-500 text-white px-8 py-4 text-xl rounded inline-block mt-8 hover:bg-green-600">Contact Now</a></button>
//         </div>
//         </div>

//       <div style={{paddingTop:"90px"}}>
//      <div style={{marginLeft:"590px",paddingBottom:"30px"}}> <h2 className="text-3xl font-bold">Health Progress</h2></div>
//         <div className="max-w-3xl mx-auto text-center ">
//           <div className="flex flex-wrap justify-around mt-8">
//             <div className="w-full md:w-1/3 bg-white p-8 rounded shadow mb-8 md:mb-0 pr-2">
//               <h3 className="text-xl font-bold">Weight Management</h3>
//               <p>Track and manage your weight with personalized plans and insights.</p>
//             </div>
//             <div className="w-full md:w-1/3 bg-white p-8 rounded shadow mb-8 md:mb-0">
//               <h3 className="text-xl font-bold">Fitness Goals</h3>
//               <p>Work towards your fitness goals with expert-guided routines and exercises.</p>
//             </div>
//             <div className="w-full md:w-1/3 bg-white p-8 rounded shadow mb-8 md:mb-0">
//               <h3 className="text-xl font-bold">Nutritional Wellness</h3>
//               <p>Optimize your nutrition for a healthier lifestyle with personalized diet plans.</p>
//             </div>
//           </div>
//         </div>
//         </div>
// <div style={{height:"40px",width:"full"}}>

// </div>
//       <div className="bg-gray-800 text-white py-4 text-center">
//         <p>&copy; 2023 Preventive Health and Lifestyle. All rights reserved.</p>
//       </div>
   
//      </div> */}
