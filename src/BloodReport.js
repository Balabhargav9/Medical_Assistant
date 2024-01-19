import { useState } from "react";
import axios from "axios";
import { BsArrowRightSquareFill } from "react-icons/bs";
import "./BloodReport.css";
import { useNavigate } from "react-router-dom";
import HealthDetails from "./HealthDetails";
const BloodReport = () => {
  const navigate = useNavigate();
  const ee=localStorage.getItem('email');
  console.log(ee);
  const arr = [
    {
      id: "wbc-low",
      breakfast: [
        ["bread+bananashake+almonds+cashewnuts"],
        ["egg+milk+almonds+cashewnuts"],
        ["vegetablesoup+bread+almond+cashewnuts"],
        ["uthappam+milk+almond+cashewnuts"],
        ["bread+bananashake+almonds+cashewnuts"],
        ["egg+milk+almonds+cashewnuts"],
        ["uthappam+milk+almond+cashewnuts"],
      ],
      lunch:[
        ["rice+chapathi+fish"],
        ["potato+drumsticks+rice"],
        ["rice+eggcurry"],
        ["bengalgram+rice+soyabean"],
        ["rice+chapathi+masoordal"],
        ["tomato+ladysfinger+rice+chapathi"],
        ["spinach+rice+chapathi"]
      ]
    },
    {
      id: "rbc-low",
      breakfast: [
        ["bread+bananashake+almonds+cashewnuts"],
        ["egg+milk+almonds+cashewnuts"],
        ["vegetablesoup+bread+almond+cashewnuts"],
        ["uthappam+milk+almond+cashewnuts"],
        ["bread+bananashake+almonds+cashewnuts"],
        ["egg+milk+almonds+cashewnuts"],
        ["uthappam+milk+almond+cashewnuts"],
      ],
      lunch:[
        ["paraboiledrice+daal+eggcurry+rice"],
        ["chapathi+daal+drumsticks+fish"],
        ["paraboiledrice+rajma+egg+rice"],
        ["bengalgramdaal+paneer+chapathi+rice"],
        ["dramstickcurry+rice+fish"],
        ["paraboiledrice+josephscoatfried"],
        [""]
      ]
    },
    {
      id: "low-hdl",
      breakfast: [
        ["vegpie+tomatochutney+freshlimewater"],
        ["mixedvegpoha+freshlimewater"],
        ["vegetableoatsupma+freshlimewater"],
        ["vegpie+tomatochutney+freshlimewater"],
        ["mixedvegpoha+freshlimewater"],
        ["vegetableoatsupma+freshlimewater"],
        ["methiparatha+raitha"],
      ],
      lunch:[
        ["arhardal+chappathi+rice"],
        ["moongdal+chicken+rice"],
        ["masoordal+chapathi+rice+salad"],
        ["rajma+rice+curd"],
        ["fishcurry+chapathi+salad"],
        ["chapathi+chanadal+friedfish"],
        ["soyabeancurry=rice+chapathi"]
      ]
    },
    {
      id: "high-bp",
      breakfast: [
        ["paratha+groundnut"],
        ["oats+tonedmilk"],
        ["dosa+sambar+chutney"],
        ["vegetablesandwhich+bread+cucumber"],
        ["upma+tonedmilk"],
        ["idli+sambar+chutney+tonedmilk"],
        ["oats+tonedmilk"],
      ],
      lunch:[
        ["cuprice+chapathi+fish+cabbage"],
        ["chapathi+beans+capsicumpaneer+buttermilk"],
        ["cuprice+chapathi+parmal+buttermilk"],
        ["cuprice+chapathi+grilledfish+rajmah"],
        ["chapathi+beans+colocasia+buttermilk"],
        ["chapathi+lukedal+buttermilk"],
        ["cuprice+chapathi+sabji"]
      ]
    },
    {
      id: "low-bp",
      breakfast: [
        ["stuffedcabbagechapathi+tomatochutney"],
        ["cornflakes+almonds+cashewnuts"],
        ["methiparatha+raitha"],
        ["spinachparatha+raitha"],
        ["cornflakes+almonds+caashewnuts"],
        ["alooparatha+raitha+toamtochutney"],
        ["paratha+raitha+tomatochutney"],
      ],
      lunch:[
        ["chapathi+chickencurry"],
        ["ricecakes+cauliflowercurry"],
        ["chapathi+soyabeancurry"],
        ["chapathi+rice+eggcurry"],
        ["rice+sambar+raita"],
        ["chapathi+rice+paneercurry"],
        [""]
      ]
    },
    {
      id:"low-glu",
      breakfast:[
        ["vegpoha+orangejuice"],
        ["brownbread+promaganatejuice"],
        ["paneerparatha+orangejuice"],
        ["methiparatha+orangejuice"],
        ["vegetableoatsupma+promaganatejuice"],
        ["vegetableidli+orangejuice"],
        ["alooparatha+raitha+salad"]
      ],
      lunch:[
        ["chapathi+daal+spinach+carrot"],
        ["chapathi+soyabean+patatospinach"],
        ["chapathi+daal+parwal"],
        ["chapathi+panner+cucumber+potato"],
        ["chapathi+daal+mustardleave"],
        ["chapathi+backedbadi+rice"],
        ["chapathi+chickencurry"]
      ]
    },
    {
      id:"high-glu",
      breakfast:[
        ["idli+sambar+chutney"],
        ["brownbread+cheese+boiledegg+lowfatmilk"],
        ["chappathi+aloocurry"],
        ["methiparatha+greenchutney"],
        ["oatsUpma+lowfatmilk"],
        ["vegpoha+lowfatmilk"],
        ["utappam+greenchutney"]
      ],
      lunch:[
        ["roti+fishcurry+"],
        ["vegpulavrice+soyachunkcurry+curd"],
        ["cuprice+palaksubji+curd"],
        ["cuprice+chapathi+kidneybeanscurry"],
        ["chappathi+clusterbeansubji+fishcurry"],
        ["cuprice+soyachunkscurry+curd"],
        ["vegpulavrice+chicken+curd"]
      ]
    },
    {
      id:"high-bmi",
      breakfast:[
        ["eggwhite+brownbread+lowfatmilk"],
        ["chapathi+lowfatcurd"],
        ["besancheela+lowfatcurd"],
        ["brownbreadupma+lowfatmilk"],
        ["hungcardSandwich+greenChutney+orange"],
        ["poha+lowFatCurd"],
        ["lowFatMilk+Oats+strawberry"]
      ],
      lunch:[
        ["arhardal+cuprice+salad"],
        ["moongdal+chickencurry+salad"],
        ["masoordal+chappati+curd"],
        ["rajmacurry+chapathi+salad"],
        ["whitechana+chapathi+chickencurry"],
        ["chanadal+chapathi"],
        ["cupsoyabeancurry+rice+curd"]
      ]
    },
    {
      id:"low-bmi",
      breakfast:[
        ["brownbreadSandwhich+milk+cashew+almondswalnuts"],
        ["paratha+curd+cashew+almonds"],
        ["paneerbesancheela+curd+cashew+allmonds"],
        ["breadUpma+milk+cashew+almonds+walnuts"],
        ["potatosandwhich+orangejuice+cashew+almonds"],
        ["poha+curd+cashew+almonds"],
        ["sujicheela+strawberryshake+cashew+almonds"],
      ],
      lunch:[
        ["arhardal+potatocurry+chappathi+rice"],
        ["moongdal+chickencurry+potato"],
        ["rajmacurry+spinach+rice"],
        ["massordal+colacasia+happathi+rice"],
        ["whitechana+fishcurry+chapathi"],
        ["bhindivegetable+rice+chapathi"],
        ["mixdal+soyabeancurry+curd"]
      ]
    }
  ];
const [dplyrbc,setdplyrbc] = useState("none");
const [dplywbc,setdplywbc] = useState("none");
const [dplyhemo,setdplyhemo] = useState("none");
const [dplyhdl,setdplyhdl] = useState("none");
const [dplyldl,setdplyldl] = useState("none");
const [dplybmi,setdplybmi] = useState("none");
const [dplybp,setdplybp] = useState("none");
const [dplyglu,setdplyglu] =useState("none");

  const sunday = 0;
  const monday = 1;
  const tuesday = 2;
  const wednesday = 3;
  const thursday = 4;
  const friday = 5;
  const saturday = 6;
 const monfood = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

  const [rbc, setrbc] = useState("");
  const [wbc, setwbc] = useState("");
  const [hemo, sethemo] = useState("");
  const [hdl, sethdl] = useState("");
  const [ldl, setldl] = useState("");
  const [bmi, setbmi] = useState("");
  const [bp, setbp] = useState("");
  const [glu, setglu] = useState("");
  const [nul, setNul] = useState(true);




  const DoThis = (e) => {
    e.preventDefault();
    //bp
    const input = bp.trim().split("/");
    if (input[0] < 120 && input[1] < 80) {
     console.log("low-bp");
     //breakfast
     for(var x=0;x<7;x++){
      const food = String(arr[4].breakfast[x]);
      const f = food.split("+").flat();
    const l=monfood[x].length;
    for(var i=0;i<f.length;i++){
      monfood[x][l+i]=f[i];
    } 
  }

    } else if (input[0] >= 120 && input[0] < 130 && input[1] < 80) {
      console.log("normal-bp");
      
    } else {
      console.log("high-bp");
      for(var xx=0;xx<7;xx++){
        const food = String(arr[3].breakfast[xx]);
        const f = food.split("+").flat();
      const l=monfood[xx].length;
      for(var ii=0;ii<f.length;ii++){
        monfood[xx][l+ii]=f[ii];
      }
    }
  }
    //bmi
    if (bmi < 18.5) {
      console.log("low-bmi");
      localStorage.setItem('ep',"low")
      for(var y=0;y<7;y++){
        const food = String(arr[8].breakfast[y]);
        const f = food.split("+").flat();
      const l=monfood[y].length;
      for(var iii=0;iii<f.length;iii++){
        monfood[y][l+iii]=f[iii];
      }
    }
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log("normal-bmi");
      localStorage.setItem('ep',"normal")
    } else {
      console.log("high-bmi");
      localStorage.setItem('ep',"normal")
     
      for(var p=0;p<7;p++){
        const food = String(arr[7].breakfast[p]);
        const f = food.split("+").flat();
      const l=monfood[p].length;
      for(var pp=0;pp<f.length;pp++){
        monfood[p][l+pp]=f[pp];
      }
    }
    }
    //hdl
    if (hdl < 150) {
    
      console.log("low-hdl");
      setdplyhdl("low");
      for(var k=0;k<7;k++){
      const food = String(arr[2].breakfast[k]);
      const f = food.split("+").flat();
    const l=monfood[k].length;
    for(var i2=0;i2<f.length;i2++){
      monfood[k][l+i2]=f[i2];
    } 
  }
  console.log(monfood);
    } else if (hdl >= 150 && hdl < 200) {
      console.log("normal-hdl");
      setdplyhdl("normal");
    } else if (hdl >= 200 && hdl < 500) {
      console.log("high-hdl");
      setdplyhdl("high");
    } else {
      console.log("high-hdl");
      setdplyhdl("high");
    }
    //rbc
    if (rbc < 4) {
      console.log("low-rbc");
      setdplyrbc("low");
      for(var z=0;z<7;z++){
      const food = String(arr[1].breakfast[z]);
      const f = food.split("+").flat();
      const l=monfood[z].length;
      for(var j=0;j<f.length;j++){
        monfood[z][l+j]=f[j];
      }
    }
    console.log(monfood);
    } else {
      console.log("normal-rbc");
      setdplyrbc("normal");
    }
    //wbc
    if (wbc < 4) {
      console.log("low-wbc");
      setdplywbc("low");
      for(var zz=0;zz<7;zz++){
        const food = String(arr[0].breakfast[zz]);
        const f = food.split("+").flat();
        const l=monfood[zz].length;
        for(var jj=0;jj<f.length;jj++){
          monfood[zz][l+jj]=f[jj];
        }
      }
    } else {
      console.log("normal-wbc");
      setdplywbc("normal");
    }
    //glucouse
    if (glu < 100) {
      console.log("normal-glu");
      setdplyglu("normal");
    } else if (glu > 100 && glu < 125) {
      console.log("high-glu");
      setdplyglu("high");
      for(var kk=0;kk<7;kk++){
        const food = String(arr[6].breakfast[kk]);
        const f = food.split("+").flat();
        const l=monfood[kk].length;
        for(var j9=0;j9<f.length;j9++){
          monfood[kk][l+j9]=f[j9];
        }
      }
    } else {
      console.log("high-glu");
      setdplyglu("high");
      for(var kk=0;kk<7;kk++){
        const food = String(arr[6].breakfast[kk]);
        const f = food.split("+").flat();
        const l=monfood[kk].length;
        for(var j9=0;j9<f.length;j9++){
          monfood[kk][l+j9]=f[j9];
        }
      }
    }
  // //lunch
  //    const input = bp.trim().split("/");
    if (input[0] < 120 && input[1] < 80) {
     console.log("low-bp");
     for(var x99=0;x99<7;x99++){
      const food = String(arr[4].lunch[x99]);
      const f = food.split("+").flat();
    const l=monfood[7+x99].length;
    for(var i99=0;i99<f.length;i99++){
      monfood[7+x99][l+i99]=f[i99];
    } 
  }

    } else if (input[0] >= 120 && input[0] < 130 && input[1] < 80) {
      console.log("normal-bp");
      
    } else {
      console.log("high-bp");
      for(var xx99=0;xx99<7;xx99++){
        const food = String(arr[3].lunch[xx99]);
        const f = food.split("+").flat();
      const l=monfood[7+xx99].length;
      for(var ii99=0;ii99<f.length;ii99++){
        monfood[7+xx99][l+ii99]=f[ii99];
      }
    }
  }
    if (bmi < 18.5) {
      console.log("low-bmi");
      localStorage.setItem('ep',"low")
      for(var y99=0;y99<7;y99++){
        const food = String(arr[8].lunch[y99]);
        const f = food.split("+").flat();
      const l=monfood[7+y99].length;
      for(var iii99=0;iii99<f.length;iii99++){
        monfood[7+y99][l+iii99]=f[iii99];
      }
    }
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log("normal-bmi");
      localStorage.setItem('ep',"normal")
    } else {
      console.log("high-bmi");
      localStorage.setItem('ep',"normal")
     
      for(var p99=0;p99<7;p99++){
        const food = String(arr[7].lunch[p99]);
        const f = food.split("+").flat();
      const l=monfood[7+p99].length;
      for(var pp99=0;pp99<f.length;pp99++){
        monfood[7+p99][l+pp99]=f[pp99];
      }
    }
    }
    //hdl
    if (hdl < 150) {
      console.log("low-hdl");
      setdplyhdl("low");
      for(var k99=0;k99<7;k99++){
      const food = String(arr[2].lunch[k99]);
      const f = food.split("+").flat();
    const l=monfood[7+k99].length;
    for(var i299=0;i299<f.length;i299++){
      monfood[7+k99][l+i299]=f[i299];
    } 
  }
  console.log(monfood);
    } else if (hdl >= 150 && hdl < 200) {
      console.log("normal-hdl");
      setdplyhdl("normal");
    } else if (hdl >= 200 && hdl < 500) {
      console.log("high-hdl");
      setdplyhdl("high");
    } else {
      console.log("high-hdl");
      setdplyhdl("high");
    }
    //   //rbc
    if (rbc < 4) {
      console.log("low-rbc");
      setdplyrbc("low");
      for(var z99=0;z99<7;z99++){
      const food = String(arr[1].lunch[z99]);
      const f = food.split("+").flat();
      const l=monfood[7+z99].length;
      for(var j99=0;j99<f.length;j99++){
        monfood[7+z99][l+j99]=f[j99];
      }
    }
    console.log(monfood);
    } else {
      console.log("normal-rbc");
      setdplyrbc("normal");
    }
//wbc
    if (wbc < 4) {
      console.log("low-wbc");
      setdplywbc("low");
      for(var zz99=0;zz99<7;zz99++){
        const food = String(arr[0].lunch[zz99]);
        const f = food.split("+").flat();
        const l=monfood[7+zz99].length;
        for(var jj99=0;jj99<f.length;jj99++){
          monfood[7+zz99][l+jj99]=f[jj99];
        }
      }
    } else {
      console.log("normal-wbc");
      setdplywbc("normal");
    }
//glucouse
    if (glu < 100) {
      console.log("normal-glu");
      setdplyglu("normal");
    } else if (glu > 100 && glu < 125) {
      console.log("high-glu");
      setdplyglu("high");
      for(var kk99=0;kk99<7;kk99++){
        const food = String(arr[6].lunch[kk99]);
        const f = food.split("+").flat();
        const l=monfood[7+kk99].length;
        for(var j999=0;j999<f.length;j999++){
          monfood[7+kk99][l+j999]=f[j999];
        }
      }
    } else {
      console.log("high-glu");
      setdplyglu("high");
      for(var kk99=0;kk99<7;kk99++){
        const food = String(arr[6].lunch[kk99]);
        const f = food.split("+").flat();
        const l=monfood[7+kk99].length;
        for(var j999=0;j999<f.length;j999++){
          monfood[7+kk99][l+j999]=f[j999];
        }
      }
    }
    console.log("This is the monGOOOO",monfood);
    axios.post("http://localhost:8379/health/dietmenu",{email:ee,dietchart:monfood}).then((response)=>{console.log("diet updated");console.log(response.data.response._id);const iid=response.data.response._id;const store = localStorage.setItem('id',iid)}).catch((error)=>{console.log(error.message)});
  axios.post("http://localhost:8379/health/BloodNew",{email:ee,rbc:rbc,wbc:wbc,hdl:hdl,bmi:bmi,glu:glu,ldl:ldl,bp:bp,hemo:hemo}).then(()=>{console.log("successfull")}).catch((error)=>{console.log(error.message)});
  setrbc("");setbmi("");setbp("");setglu("");setldl("");sethdl("");sethemo("");setwbc("")
  };
  const MoreData = () => {
    navigate("/HealthDetails");
  };
const DietChart=()=>{
  navigate("/dietchart");
}
  return (
    <>
      <div className="flex justify-center" style={{ height: "454px",marginTop:"20px" }}>
        <form onSubmit={DoThis}>
          <div
            className="border-2"
            style={{ width: "400px", paddingLeft: "20px" }}
          >
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b1">RBC Count :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setrbc(e.target.value);
                  }}
                  id="b1"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b11"
                style={{
                  display: nul ? "inline" : "none",
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b2">WBC Count :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setwbc(e.target.value);
                  }}
                  id="b2"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b22"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b3">Hemoglobin :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    sethemo(e.target.value);
                  }}
                  id="b3"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b33"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b4">HDL Count :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    sethdl(e.target.value);
                  }}
                  id="b4"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b44"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b5">LDL Count :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setldl(e.target.value);
                  }}
                  id="b5"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b55"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b6">BMI :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setbmi(e.target.value);
                  }}
                  id="b6"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b66"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b7">BP :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setbp(e.target.value);
                  }}
                  id="b7"
                  type="text"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b77"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ width: "350px", height: "50px", paddingTop: "5px" }}
            >
              <div style={{ width: "100px" }}>
                <label for="b8">Glucose :</label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setglu(e.target.value);
                  }}
                  id="b8"
                  type="number"
                  className="border-2 border-black"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                id="b88"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "8px",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}
              >
                <BsArrowRightSquareFill />
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                {" "}
                <button
                  className="btn"
                  type="submit"
                  style={{
                    borderRadius: "8px",
                    height: "50px",
                    width: "80px",
                    backgroundColor: "green",
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className="flex justify-around  h-[320px] w-[full] mt-4"
        
      >
        <div className=" bg-gray-800 h-[300px] w-[240px]">
          <div className=" h-[200px] w-full"></div>
          <div className="h-[100px] w-full flex justify-center ">
            {" "}
            <button onClick={MoreData} className=" bg-blue-400 h-1/2 w-1/2">
              check Reports
            </button>
          </div>
        </div>

        <div className=" bg-gray-800 h-[300px] w-[240px]">
          <div className=" h-[200px] w-full"></div>
          <div className="h-[100px] w-full flex justify-center ">
            {" "}
            <button onClick={DietChart} className=" bg-blue-400 h-1/2 w-1/2">Diet</button>
          </div>
        </div>

        <div className=" bg-gray-800 h-[300px] w-[240px]">
          <div className=" h-[200px] w-full"></div>
          <div className="h-[100px] w-full flex justify-center ">
            {" "}
            <button onClick={()=>{navigate("/yoga")}} className=" bg-blue-400 h-1/2 w-1/2">Yoga</button>
          </div>
        </div>

        <div className=" bg-gray-800 h-[300px] w-[240px]">
          <div className=" h-[200px] w-full"></div>
          <div className="h-[100px] w-full flex justify-center ">
            {" "}
            <button className=" bg-blue-400 h-1/2 w-1/2">Analysis</button>
          </div>
        </div>
      </div>
      <div style={{display:"none"}}>
        <HealthDetails dplyrbc={dplyrbc} dplywbc={dplywbc} dplyhemo={dplyhemo} dplyhdl={dplyhdl} dplyldl={dplyldl} dplybmi={dplybmi} dplybp={dplybp} dplyglu={dplyglu}  />
       






      </div>
    </>
  );
};
export default BloodReport;
