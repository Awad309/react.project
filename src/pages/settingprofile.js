import React from "react";

import Navbarlogin from "../components/navbarlogin";
import './settingprofile.css'
import Foot from "../components/foot";
import image from "../images/Union.png"

const Settingprofile = () => {
    return (
<>
<Navbarlogin />
<div className="parent">
<img src={image} className="back-image" alt="" />
<div className="form">
<div className="form-one">
<ul>
    <h3>Settings</h3>
    <li><a href="//">My Profile</a></li>
    <li><a href="//">Password</a></li>
    <li><a href="//">Payment info</a></li>
</ul>
</div>
<div className="form-two">
    <h3>My Profile</h3>
    <ul className="txt">
        <li><label for="name">Name</label></li>
        <li><label for="email">E-mail</label></li>
        <li><label for="phone">Phone</label></li>
        <li><label for="gender">Gender</label></li>
        <li><label>Date Of Birth</label></li>
    </ul>
    <ul className="put">
    <li><input type="text" id="name"></input></li>
    <li><input type="email" id="E-mail"></input></li>
    <li><input type="number" id="Phone"></input></li>
    <li><select  name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select></li>
    <li><input type="date" id="Date Of Birth"></input></li>
    </ul>
    <div className="but">
    <button className="but-one">Cancel</button>
    <button className="but-two">Save</button>
    </div>
</div>
</div>
</div>

<Foot />
</>

    );
    }  
    export default Settingprofile;