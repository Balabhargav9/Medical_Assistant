import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
const HambChild = ()=>{
    const [open, setOpen] = useState(false);
  const handleFunc = (open) => {
    setOpen((prevOpen) => !prevOpen);
  };
return(
<>
{/* <div style={{height:"70px"}}>
      <button class="pl-4 pt-2" onClick={handleFunc}>
      <div className="font-medium pt-4"><GiHamburgerMenu/></div>
      </button>
      </div>
      <div
        className=" flex flex-col justify-evenly bg-yellow-300 text-black font-bold "
        style={{
         marginTop:"25px",
          width: "11%",
          height:"50px",
          display: open ? "flex" : "none",
          
        }}
      >
        <div>l1</div>
        <div>l2</div>
        <div>l3</div>
        <div>l4</div>
      </div> */}
      <div className=" w-[130px] h-1/4">
<button onClick={handleFunc} className=" text-black"><GiHamburgerMenu/></button>
<div className=" text-black " style={{display: open ? "flex" :"none"}}>
  <div>
  <div className=" pl-2">l1</div>
  <div className=" pl-2">l1</div>
  <div className=" pl-2">l1</div>
  <div className=" pl-2">l1</div>
  </div>
</div>
      </div>
</>
);
}
export default HambChild;