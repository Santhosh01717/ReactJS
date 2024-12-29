import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import GetProduct from "./components/GetProduct";
// import AboutUs from "./components/AboutUs";
import { FoodDetails } from "./components/FoodDetails";
import "./../index.css"

const About = lazy(() => import ("./components/AboutUs"));

const AppLayout = () => {
  return ( 
    <>
    <div>
      
          {/* <Header /> */}
      <Body />
    </div>
    
    </>
  );
};
const App = () => {
  return(
      <>
        <BrowserRouter>
        <Header />
          <Routes>           
            <Route path="/" element = {<AppLayout />} />
            <Route path="/about" element = 
              {
              <Suspense fallback = {<h1>Loading....</h1>}> 
              <About /> 
              </Suspense>
              }
              />
            <Route path="/foods/:id" element = {<FoodDetails />}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

createRoot(document.getElementById("root")).render(<App />);