const RestaurantType = (props) => {
  const { resData } = props;
  // console.log(key);
  return (
    <div className="flex">
      <div className="w-[250px] p-4 m-4 bg-gray-100 rounded-lg">
        <img className = "w-[250px] rounded-lg" src= {resData.img}></img>
        {/* <div className="rest-name">{resData.id}</div> */}
        
        <div className="text-2xl font-bold mb-4">{resData.name}</div>
        <div className="food-name">{resData.price}$</div>
        <div className="food-name">{resData.rate} star</div>
        <div className="food-name">{resData.country} </div>
      </div>
    </div>
  );
};

export default RestaurantType;
