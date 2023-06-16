import React, { useEffect, useState } from "react";
import img from "../Images/admin.jpg";
import refimg from '../Images/ref.jpg'

function Adminimage(props) {
    // console.log(props.acess)
    const acess=props.acess;

    const [style,setStyle]=useState();
    const [styleref,setStyleref]=useState();
    useEffect(()=>{
      if(acess==="admin"){
            setStyle();
            setStyleref({
                display:"block"
            })
         }else{
    
         }
    })
   
  return (
  
    <>
      <div className="img-grp">
        <img src={img} id="adminImg" style={style} className="admin-img"></img>
        <img src={refimg}  id="refImg" style={styleref} className="admin-img"></img>
        
      </div>
    </>
  );
}

export default Adminimage;
