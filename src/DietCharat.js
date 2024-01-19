import axios from "axios";
import { useEffect, useState } from "react";

const DietChart = () => {
  const [tinu, setTinu] = useState("");
  const iit = localStorage.getItem("id");
  console.log(iit);
  useEffect(() => {
    axios
      .post("http://localhost:8379/health/bringmenu", { id: iit })
      .then((response) => {
        const ll=response.data.response.length;
        console.log("hello", response.data.response[ll-1].dietchart);
        setTinu(response.data.response[ll-1].dietchart);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  
 

  return (
    <>
      {/* <div>
        <div>Breakfast</div>
        <div>Monday:{tinu[0]}</div>
        <div>tuesday:{tinu[1]}</div>
        <div>wednesday:{tinu[2]}</div>
        <div>thursday:{tinu[3]}</div>
        <div>friday:{tinu[4]}</div>
        <div>saturday:{tinu[5]}</div>
        <div>sunday:{tinu[6]}</div>
        <div>Lunch</div>
        <div>Monday:{tinu[7]}</div>
        <div>tuesday:{tinu[8]}</div>
        <div>wednesday:{tinu[9]}</div>
        <div>thursday:{tinu[10]}</div>
        <div>friday:{tinu[11]}</div>
        <div>saturday:{tinu[12]}</div>
        <div>sunday:{tinu[13]}</div>
    </div> */}
       <div className="border-2 border-black ml-4 mr-4 mt-2" style={{height:"750px"}}>
        <div>
      <div className="flex " style={{borderBottom:"1px solid black",height:"50px"}}>
        <div style={{height:"50px",width:"25%",borderRight:"1px solid black",paddingLeft:"150px",paddingTop:"px",fontSize:"35px"}}>Day</div>
        <div style={{height:"50px",width:"25%",borderRight:"1px solid black",paddingLeft:"110px",paddingTop:"px",fontSize:"35px"}}>BreakFast</div>
        <div style={{height:"50px",width:"25%",borderRight:"1px solid black",paddingLeft:"120px",paddingTop:"px",fontSize:"35px"}}>Lunch</div>
        <div style={{height:"50px",width:"25%",paddingLeft:"120px",paddingTop:"px",fontSize:"35px"}}>Dinner</div>
      </div>
      </div>
        <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>SUNDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
            <ul>
                <li>{tinu[0][0]}</li>
                <li>{tinu[0][1]}</li>
<li>{tinu[0][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[7][0]}</li>
                <li>{tinu[7][1]}</li>
<li>{tinu[7][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[7][3]}</li>
                <li>{tinu[7][4]}</li>
<li>{tinu[7][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>MONDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[1][0]}</li>
                <li>{tinu[1][1]}</li>
<li>{tinu[1][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[8][0]}</li>
                <li>{tinu[8][1]}</li>
<li>{tinu[8][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[8][3]}</li>
                <li>{tinu[8][4]}</li>
<li>{tinu[8][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>TUESDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[2][0]}</li>
                <li>{tinu[2][1]}</li>
<li>{tinu[2][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[9][0]}</li>
                <li>{tinu[9][1]}</li>
<li>{tinu[9][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[9][3]}</li>
                <li>{tinu[9][4]}</li>
<li>{tinu[9][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>WEDNESDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[3][0]}</li>
                <li>{tinu[3][1]}</li>
<li>{tinu[3][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[10][0]}</li>
                <li>{tinu[10][1]}</li>
<li>{tinu[10][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[10][3]}</li>
                <li>{tinu[10][4]}</li>
<li>{tinu[10][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>THURSDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[4][0]}</li>
                <li>{tinu[4][1]}</li>
<li>{tinu[4][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[11][0]}</li>
                <li>{tinu[11][1]}</li>
<li>{tinu[11][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
       <ul>
                <li>{tinu[11][3]}</li>
                <li>{tinu[11][4]}</li>
<li>{tinu[11][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>FRIDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>           
        {tinu && tinu[0] && (
         <ul>
                <li>{tinu[5][0]}</li>
                <li>{tinu[5][1]}</li>
<li>{tinu[5][2]}</li>
            </ul>
        )}
            </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[12][0]}</li>
                <li>{tinu[12][1]}</li>
<li>{tinu[12][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[12][3]}</li>
                <li>{tinu[12][4]}</li>
<li>{tinu[12][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      <div>
        <div className="flex" style={{height:"100px",width:"full",borderBottom:"1px solid black"}}>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"13px",fontSize:"35px",borderRight:"1px solid black"}}>SUNDAY</div>
        <div style={{height:"100px",width:"25%",paddingTop:"px",paddingLeft:"100px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[6][0]}</li>
                <li>{tinu[6][1]}</li>
<li>{tinu[6][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px",borderRight:"1px solid black"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[13][0]}</li>
                <li>{tinu[13][1]}</li>
<li>{tinu[13][2]}</li>
            </ul>
        )}
        </div>
        <div style={{height:"100px",width:"25%",paddingLeft:"120px",paddingTop:"px"}}>
        {tinu && tinu[0] && (
        <ul>
                <li>{tinu[13][3]}</li>
                <li>{tinu[13][4]}</li>
<li>{tinu[13][5]}</li>
            </ul>
        )}
        </div>
        </div>
      </div>
      </div> 
    </>
  );
};
export default DietChart;
