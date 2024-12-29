import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const[logBtn , setLogBtn] = useState("Login"); 
  console.log("header render");
  return (
    <div className="flex justify-between items-center bg-green-50">
      <div className="header-logo">
        <img className="w-[250px]" src="https://www.shutterstock.com/image-vector/simple-minimalist-food-bag-restaurant-260nw-2109066776.jpg"></img>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="p-4 m-4">Home</li>
          <li className="p-4 m-4">Contact Us</li>
          
          <li className="p-4 m-4"><Link to="/about">About Us</Link></li>
        
          <li className="p-4 m-4">Cart</li>
          <button className="p-4 m-4" onClick={ 
            () => {
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
             }
            }>{logBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
