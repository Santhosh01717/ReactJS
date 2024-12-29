import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Shimmer from './Shimmer';

export const FoodDetails = () => {
  const {id} = useParams();
  const [product , setProduct] = useState(null);
  const fetchData = () =>{
        const data =fetch("https://free-food-menus-api-two.vercel.app/burgers")
                    .then((res) => res.json())
                    .then((obj) => {
                        console.log(obj);
                        const selectFood = obj.find((item) => item.id === id);
                        setProduct(selectFood);
                    })
                    .catch((err) => console.log(err));

  };
  useEffect(() => {
    fetchData() }, []);
    console.log(product);
  if(product == null) return <Shimmer />
  return (
    <div className="res1">
        <img className = "img-custom" src= {product?.img}></img>     
        <div className="food-name">{product?.name}</div>
        <div className="food-name">{product?.price}$</div>
        <div className="food-name">{product?.rate} star</div>
        <div className="food-name">{product?.country} </div>
      </div>
   
  )
}
