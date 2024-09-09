const RestaurantType = (props) => {
  const { resData } = props;
  return (
    <div className="res-container">
      <div className="res1">
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        <div className="rest-name">{resData.id}</div>
        <div className="food-name">{resData.name}</div>
        <div className="food-name">{resData.rating} star</div>
      </div>
    </div>
  );
};

export default RestaurantType;
