import React, { useState } from "react";
import "../Style/mainpage.css";
import Adminimage from "./Adminimage";
import img from "../Images/admin.jpg";
import refimg from '../Images/ref.jpg'



function Mainpage() {


  const [style,setStyle]=useState()
  const [refStyle,setRefstyle]=useState()
  const [adminStyle,setAdminstyle]=useState()
  //  For Acesss Permisson
  const[acess,setAcess]= useState('admin');

  const handleAdmin=()=>{
   setStyle();
   setRefstyle();
    setAdminstyle();
    setAcess('admin')
  }

  const handleRef=()=>{
    setAdminstyle({
      color:'#002333'
    });
     setStyle({
      left:'148px',
      width:"55%"
    })
    setRefstyle({
      color:"white"
    })
    setAcess('Referral')


  }


  return (
    <>
      <div className="main">
        <div className="bg-card">
          <div className="btn-round">
            <div id="btn" style={style}></div>
          <button className="btn-admin" style={adminStyle} onClick={handleAdmin}>
            ADMIN
          </button>
          <button className="btn-ref" style={refStyle} onClick={handleRef}>
            REFERRAL
          </button>

          </div>
          <div className="heading">
            <span>Career</span>
            <br></br>
            <div style={{ color: "white", lineHeight: "20px" }}>
              Guidance Technologies
            </div>
            <div id="admin-img">
            <div className="img-grp">
              {acess==='admin'? <img src={img} id="adminImg"  className="admin-img"></img>:  <img src={refimg}  id="refImg"  className="admin-img"></img>}
        
       
        
      </div>
             </div>
          </div>
          <div className="white-card"></div>
        </div>
      </div>
      {/*image */}
    
      
      
      
    </>
  );
}

export default Mainpage;
