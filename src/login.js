import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img from "./important.jpg"
const Login = () => {
    const navigate = useNavigate();
    const [error,setError] = useState("");
  const submitform = (e) => {
    e.preventDefault();
    const email = document.getElementById('lemail').value;
const password = document.getElementById('lpass').value; 
axios.post('http://localhost:8379/health/login',{
    email,
    password
}).then(()=>{console.log("log in successfully completed");navigate("/Home");localStorage.setItem('email',email)})
.catch((err)=>{setError(err.message);console.log(err.message)})

};
  return (
    <>
    <div style={{height:"100vh",width:"100%",backgroundImage:`url(${img})`}}>
      <div class="text-2xl flex justify-center " style={{paddingTop:"50px",fontSize:"40px"}}>LOGIN</div>
      <div>
            <div class=" flex justify-center  font-bold text-lg" style={{height:'35px'}}>
            <span class="bg-red-400 rounded-md">  {error && <div id="errormess">{error}  </div>}</span>
            </div>
            </div>
      <form onSubmit={submitform}>
        <div class="flex justify-center">
          <div
            class="border-2 border-black flex flex-col justify-evenly items-center "
            style={{ height: "250px", width: "40%",marginTop:"50px" }}
          >
            <div>
              <label for="lemail" class=" font-bold text-lg">email:</label>
              <input type="text"  id="lemail" required></input>
            </div>
            <div>
              <label for="lpass" class=" font-bold text-lg">password:</label>
              <input type="password" id="lpass"  required></input>
            </div>
            <div>
              <button
                class="border-2 rounded-md hover:bg-green-500"
                style={{ width: "100px" }}
              >
                SUBMIT
              </button>
            </div>
            <div class=" font-bold text-lg">
              don't have a account{" "}
              <span class="text-blue-600">
                <a href="/signup " class="font-medium">signup</a>
              </span>{" "}
              here
            </div>
            <div class=" font-bold text-lg">
              forgot your password reset{" "}
              <span class=" text-blue-600 font-medium">here</span>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};
export default Login;
