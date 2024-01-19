import { useEffect, useState } from "react";
import axios from "axios";

const HealthDetails = ({dplyrbc,dplybmi,dplybp,dplyglu,dplyhdl,dplyhemo,dplywbc,dplyldl}) =>{
  const [data, setData] = useState([]);
  const ep = localStorage.getItem('ep');
  const e=localStorage.getItem('email');
  
useEffect(()=>{
  console.log(e);
axios.post("http://localhost:8379/health/getBlood",{email:e}).then((response)=>{const d=response.data.response.length;const da=response.data.response[d-1];setData(da);console.log(data)}).catch((error)=>{console.log(error)})
},[])
const wbc= data.wbc<6 ? "LOW" : "NORMAL";
const rbc= data.rbc<6 ? "LOW" : "NORMAL";
const glu= data.rbc<100 ? "LOW" : "NORMAL";
const hdl= data.hdl<200?(data.hdl<150 ?"LOW":"NORMAL") :"HIGH";
const ldl= data.ldl<200?(data.ldl<150 ?"LOW":"NORMAL") :"HIGH";
const bmi= data.hdl<25?(data.hdl<18.5 ?"LOW":"NORMAL") :"HIGH";
const hemo= data.hdl<200?(data.hdl<150 ?"LOW":"NORMAL") :"HIGH";
const bp = data.bp<120 ? (data.bp<80?"LOW":"NORMAL") :"HIGH";
return(<>
<div className="grid grid-rows-2 grid-cols-4 gap-y-4 h-800px w-100vh pl-20" style={{color:"white",fontFamily:"sans-serif",backgroundImage:``}}>
<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://labs.selfdecode.com/app/uploads/2019/11/bigstock-Blood-Cells-977601-min-2.jpg" alt="rbc" /></div>  
<div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div >TYPE:RBC</div>
<div >COUNT:{data.rbc}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{rbc}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://as2.ftcdn.net/v2/jpg/03/37/17/79/1000_F_337177941_g8nuOCbU6HzDE6Hz5XzyuLFSd1hdfNPC.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:WBC</div>
<div>COUNT:{data.wbc}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{wbc}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://as1.ftcdn.net/v2/jpg/06/07/29/46/1000_F_607294661_R68yMAd106UM4CWyisBsjzOmLwYdpex0.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:HEMO</div>
<div>COUNT:{data.hemo}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{hemo}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://as1.ftcdn.net/v2/jpg/05/86/85/12/1000_F_586851257_Rs5OzQILbwKPC3ZTFVt7fwbzGAW65Z2I.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:HDL</div>
<div>COUNT:{data.hdl}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{hdl}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://as2.ftcdn.net/v2/jpg/02/68/65/15/1000_F_268651578_NNBLEHnbUOYBp4XvnIrOSsw75z4RXCDl.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:LDL</div>
<div>COUNT:{data.ldl}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{ldl}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://as2.ftcdn.net/v2/jpg/06/07/45/95/1000_F_607459590_dbn0mGSS89zy6iBTf5qjwikhk7QFmzO9.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:GLU</div>
<div>COUNT:{data.glu}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{glu}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://images.pexels.com/photos/6823415/pexels-photo-6823415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:BP</div>
<div>COUNT:{data.bp}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{bp}</div>
</div>
</div>

<div id="card" className=" bg-blue-400 rounded-lg" style={{height:"400px",width:"240px"}}>
  <div className="w-[240px] h-[150px]  flex justify-center mt-1 pt-1"><img className="w-3/4 h-full rounded-xl" src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/01/shdgxsxsefgxfcxdddcccscsd-1673530998.jpg" alt="rbc" /></div>  
  <div style={{height:"220px",width:"200px",marginLeft:"20px",marginRight:"20px",marginTop:"5px"}}>
<div>TYPE:BMI</div>
<div>COUNT:{data.bmi}</div>
<div style={{paddingLeft:"40px",paddingTop:"30px",fontSize:"30px"}}>{bmi}</div>
</div>
</div>
</div>
</>);
}
export default HealthDetails;