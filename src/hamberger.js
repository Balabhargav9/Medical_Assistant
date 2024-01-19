import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import HambChild from "./hambChild";

const Hamb = () => {
  const [open, setOpen] = useState(false);
  const handleFunc = (open) => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
    {/* <div class=" pl-1">
      <button class="pl-4 pt-2" onClick={handleFunc}>
      <div class="font-medium pt-4"><GiHamburgerMenu/></div>
      </button>
      </div>
      <div
        class=" flex flex-col justify-between bg-yellow-300 text-black font-bold "
        style={{
          marginTop:"47px",
          borderRadius:"8px",
          width: "130px",
          display: open ? "flex" : "none",
          height: "700px",
        }}
      >
        <div><HambChild/></div>
        <div><HambChild/></div>
        <div><HambChild/></div>
        <div><HambChild/></div>
      </div> */}
      <div className="h-[90px] w-[120px] flex justify-center">
        <button onClick={handleFunc} className="h-[90px] w-[90px] pl-6"><GiHamburgerMenu/></button>
      </div>
      <div className=" bg-yellow-400 w-[130px] h-[640px]" style={{display: open ? "flex" :"none"}}>
        <div>
      <HambChild/>
      <HambChild/>
      <HambChild/>
      <HambChild/>
      </div>
      </div>
    </>
  );
};
export default Hamb;
