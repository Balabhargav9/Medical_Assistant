import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import img from "./important.jpg"
const SignUp = () => {
  const navigate = useNavigate();
  const [error,setError] = useState("");
  const HandleForm = async (e) => {
    e.preventDefault();
 const firstname = document.getElementById('fname').value;
 const lastname = document.getElementById('lname').value;
 const email = document.getElementById('e-mail').value;
 const password = document.getElementById('pass').value;
 const confirmPassword = document.getElementById('cpass').value;
 if(password !== confirmPassword){
    return setError('please enter correct message');
 }
 axios.post('http://localhost:8379/health/signUp',{
    firstname,
    lastname,
    email,
    password,
    confirmPassword
 }).then(()=>{console.log("your data had been sent to the url");})
 .catch((errors)=>{
    console.log(errors.message);
 })
 axios.post("http://localhost:8379/health/BloodNew",{email:email,rbc:"0",wbc:"0",hdl:"0",bmi:"0",glu:"0",ldl:"0",bp:"0",hemo:"0"}).then(()=>{console.log("successfull")}).catch((error)=>{console.log(error.message)});
    navigate("/Home");
  };

  return (
    <>
    <div style={{height:"100vh",width:"100%",backgroundImage:`url(${img})`}}>
      <div class="text-2xl flex justify-center">SIGN UP</div>
      <div class="flex justify-center ">
        <div
          style={{
            height: "250px",
            width: "50%",
          }}
        >
            <div>
            <div class=" flex justify-center  font-bold text-lg" style={{height:'35px'}}>
            <span class="bg-red-400 rounded-md">  {error && <div id="errormess">{error}  </div>}</span>
            </div>
            </div>
          <form
            onSubmit={HandleForm}
            className="flex flex-col  items-center justify-evenly border-2 border-black gap-y-4"
          >
            
           
            <div>
              <label htmlFor="fname">First Name:</label>
              <input type="text" id="fname" required></input>
            </div>
            <div>
              <label htmlFor="lname">Last Name:</label>
              <input type="text" id="lname" required></input>
            </div>
            <div>
              <label htmlFor="e-mail">Email:</label>
              <input type="email" id="e-mail" required></input>
            </div>
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" id="pass" required></input>
            </div>
            <div>
              <label htmlFor="cpass">Confirm Password:</label>
              <input type="password" id="cpass" required></input>
            </div>
            <div>
              <button
                class="border-2 rounded-md hover:bg-green-500"
                style={{ width: "100px" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;
