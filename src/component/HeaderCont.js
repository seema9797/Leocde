import React from 'react'
import Cafe from "../img/img1.png"
import OpenMenu from "../img/img2.png"
import "../styles/style.css"
import {Badge,Button} from "reactstrap"
function HeaderCont() {
  return (
    <div className="TopCont">
     <div className="subContainer">
        <div className="Lecafe">
        <img src={OpenMenu} alt="error"/>
        <div className="LecafeText">
        <h2 className="text-white">Le Cafe</h2>
        <p className="text-white mb-1">
        <i className="fa-solid fa-location-dot"></i>
          78 Sazz Street, India
         <br/> 
         <Badge color="success">
         open
</Badge>
        
        </p>
        </div>
        </div>
        <div>
        <img src={Cafe} alt="error" /> 
        </div>
        <Button className="Timing" color="light"><span className="shop-time"><i className="fa-regular fa-clock"></i> time: 9:00AM - 10:00PM</span></Button>
  
    </div>  
    </div>
  )
}

export default HeaderCont