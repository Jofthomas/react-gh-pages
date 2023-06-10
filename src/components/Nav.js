import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";

import { IoAccessibilitySharp } from "react-icons/io5";
import { BiBookAlt } from "react-icons/bi";


import React, { Component } from "react";


class Nav extends Component {
    render (){return (
        <div className="navigation">
<a href="#root">
  <AiOutlineHome className="icon active-nav" />
</a>
<a href="#about">
  <AiOutlineUser className="icon" />
</a>
<a href="#portfolio">
  <AiFillFolderOpen className="icon" />
</a>
<a href="#skills">
  <IoAccessibilitySharp className="icon" />
</a>
<a href="#resume">
  <BiBookAlt className="icon" />
</a>
</div>
    );}
  
    
   
}

export default Nav;

