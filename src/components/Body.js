import { useEffect, useState } from "react";
import RestaurantType from "./RestaurentType";
import resList from "../utils/resList";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [search , setSearch] = useState("");
  const [filtered , setFiltered] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchProduct = () => {
    setFiltered( resListData.filter( (food) => {
     return food.name.toLowerCase().includes(search.toLowerCase());
    }))
  }

  const handleSearch = (e) => {
        setSearch(e.target.value);
  }

  console.log(search);

  const fetchData = async () => {
    const data = await fetch(
      "https://free-food-menus-api-two.vercel.app/burgers"
    );

    const json = await data.json();

    console.log(json);

    setResListData(json.filter((value) => 
      value.id != "le-big-matt-kit-for-6" && value.id !="21-usda-prime-burgers-pack-of-18-8oz-each" && value.id != "bfbsr-short-rib-burger-8-pack" && value.id != "brisket-burger-8-pack"
     ));
    setFiltered(json.filter((value) => 
      value.id != "le-big-matt-kit-for-6" && value.id !="21-usda-prime-burgers-pack-of-18-8oz-each" && value.id != "bfbsr-short-rib-burger-8-pack" && value.id != "brisket-burger-8-pack"
     ));

    return json;
  };
  const filterRatedRestaurants = () => {
    setResListData(resList.filter((obj) => obj.rating > 4));
  };
  console.log("Body render");
    return resListData.length !== 0 ? (
    <div>
    <div className="flex items-center">
      <div>
        <input className="p-4 m-4 border border-solid border-gray-900 rounded-lg w-80" type = "text" value = {search} placeholder="Search Foods" onChange={handleSearch}/>
        <button className="p-4 m-4 bg-red-300 rounded-lg px-6" onClick={handleSearchProduct}>Search</button>
      </div>
      <div className="filter-btn">
        <button className="p-4 m-4 border border-solid bg-gray-200 rounded-lg"
          onClick={() => {
            setFiltered(resListData.filter((obj) => obj.rate > 4));
            // {filterRatedRestaurants}
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      </div>
      {console.log(resListData)}
      <div className="flex flex-wrap">
        {
        filtered.map((restaurant) => (
          <Link key={restaurant.id} to={"/foods/"+ restaurant.id} style={{textDecoration : "none" , color : "black"}}>
          <RestaurantType key={restaurant.id} resData={restaurant} />
          </Link>
        ))

        }
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
