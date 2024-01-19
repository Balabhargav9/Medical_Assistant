import { useEffect, useState } from "react";
import axios from "axios";
const Yoga =() =>{
    const [dat,setData] = useState("");
    const e=localStorage.getItem('email');
 const pictures=["https://as1.ftcdn.net/v2/jpg/01/29/44/14/1000_F_129441451_1t3YKm1Hrjz9Q9lYyEbdcG0j1NjebqIS.jpg","https://as2.ftcdn.net/v2/jpg/03/76/95/91/1000_F_376959155_8iH5a2R0mmS16BX2YicO4ee1YmTiI2FH.jpg","https://as2.ftcdn.net/v2/jpg/01/45/85/31/1000_F_145853119_PRbBeQ3N7t5tBpp88oYydQc6ifpsTa0i.jpg","https://as2.ftcdn.net/v2/jpg/03/78/73/27/1000_F_378732788_hJylZZe606i1leUcqhbIQa9ccQvkVUP2.jpg","https://as2.ftcdn.net/v2/jpg/06/02/99/13/1000_F_602991367_0UhwN46sO0tF1Si1c4nUCbR7AGbQK7B7.jpg","https://as2.ftcdn.net/v2/jpg/01/22/81/45/1000_F_122814537_zMvXqgUFghbWfAsgM5PP36HzTV4Ik7aa.jpg"]
    
    useEffect(()=>{
        axios.post("http://localhost:8379/health/getBlood",{email:e}).then((response)=>{const d=response.data.response.length;const da=response.data.response[d-1];setData(da)}).catch((error)=>{console.log(error)})
    },[])
    useEffect(()=>{console.log(dat)},[dat])
    const data=[{
        id:"high-bp",
        yoga:["Vajrasana","Baddha Konasana","Sethu Bandhasana"],
    },
{
    id:"low-bp",
    yoga:["Boat Pose","Chair Pose","Bow Pose"],
    
},
{
    id:"high-glu",
    yoga:["Mountain Pose","Childs Pose","Bridge Pose"],
},
{
    id:"low-glu",
    yoga:["Mountain Pose","Childs Pose","Bridge Pose"],
    
},
{
    id:"high-bmi",
    yoga:["Wide-Legged Forward Bend","Lord Of The Dance Pose"],
   
},
{
    id:"low-bmi",
    yoga:["Cobra Pose","Wind Relieving Pose","Thunderbolt Pose"],
    
},
{
    id:"low-hdl",
    yoga:["Kapalbhati Pranayam","Shalabhasana","Ardha Matsyendrasana"],
   
},
{
    id:"high-hdl",
    yoga:["chakrasan","thadasan","bramari pranayam"],
    
},
{
    id:"low-rbc",
    yoga:["eka pada chakrasan","meditation","halasan"],
   
},
{
    id:"low-wbc",
    yoga:["ardha halasan","natrajasan","warrior pose"],
    
}
]          
 
console.log(dat.rbc);  
const [asan,setyoga] = useState([]); 
//rbc
if(dat.rbc<6){
    for(var o=0;o<3;o++){
    const l=asan.length;
    asan[l]=data[8].yoga[o];
}  
}  
//wbc
if(dat.wbc<6){
    for(var oo=0;oo<3;oo++){
    const l=asan.length;
    asan[l]=data[9].yoga[oo];
}  
} 
if(dat.glu>100){
    for(var o1=0;o1<3;o1++){
        const l=asan.length;
        asan[l]=data[2].yoga[o1];
    }  
}
if(dat.bmi<18.5){
    for(var o11=0;o11<3;o11++){
        const l=asan.length;
        asan[l]=data[5].yoga[o11];
    }
}
if(dat.bmi>25){
    for(var o12=0;o12<3;o12++){
        const l=asan.length;
        asan[l]=data[4].yoga[o12];
    }
}
if(dat.hdl<150){
    for(var o22=0;o22<3;o22++){
        const l=asan.length;
        asan[l]=data[6].yoga[o22];
    }
}
if(dat.hdl>200){
    for(var o23=0;o23<3;o23++){
        const l=asan.length;
        asan[l]=data[7].yoga[o23];
    }
}
if(dat.ldl>200){
    for(var o231=0;o231<3;o231++){
        const l=asan.length;
        asan[l]=data[7].yoga[o231];
    }
}
console.log(dat.ldl,"ldl");
if(dat.ldl<150){
    for(var o2312=0;o2312<3;o2312++){
        const l=asan.length;
        asan[l]=data[7].yoga[o2312];
    }
}
const mat = Math.floor((asan.length)*(Math.random()));
const rep = [];
for(var nm=0;nm<6;nm++){
    const l= rep.length;
    rep[l]=asan[nm];
}    
console.log(rep);  
 return (
   <>
 <div className="grid grid-cols-3 gap-4">
        {rep.map((position, index) => (
          <div key={index} className="p-4 bg-gray-200 rounded-md" style={{height:"450px",width:"300px"}}>
           
          <img style={{height:"200px",width:"300px"}} src={pictures[index]} alt="bala" />
          <h2 className="text-xl font-bold">{position}</h2>
          </div>
        ))}
      </div>
 
    </> );
                          
}
export default Yoga;