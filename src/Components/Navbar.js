import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (


    <div>
  <Link to="/" >Home</Link> 
  <Link to="/about" >about</Link> 
  <Link to="/product" >product</Link>  
    </div>
    
  );
}

export default Navbar;
