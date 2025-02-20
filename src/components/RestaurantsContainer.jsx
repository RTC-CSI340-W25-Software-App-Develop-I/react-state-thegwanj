
import Restaurant from "./Restaurant";

//Containers are for behind the scenes logic  
function RestaurantsContainer(props) {
  console.log(props)
  return (
    <div className="restaurantContainer">
      {props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
