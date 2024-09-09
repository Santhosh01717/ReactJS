import { useState } from "react";
import RestaurantType from "./RestaurentType";
import resList from "../utils/resList";
const Body = () => {
  const [resListData, setResListData] = useState(resList);
  return (
    <div>
      <div className="filter-btn">
        <button
          onClick={() => {
            setResListData(resListData.filter((obj) => obj.rating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {console.log(resListData)}
      <div className="res-body">
        {resListData.map((restaurant) => (
          <RestaurantType key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
