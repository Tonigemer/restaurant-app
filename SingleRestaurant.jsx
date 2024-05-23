// import React from "react";
// import { useParams } from "react-router-dom";
// import restaurantData from "../data/restaurantData";

// const SingleRestaurant = () => {
//   const { id } = useParams();
//   const restaurant = restaurantData.find(rest => rest.id === parseInt(id));

//   if (!restaurant) {
//     return <div>Restaurant not found</div>;
//   }

//   return (
//     <div className="restaurant-details">
//       <h2>{restaurant.name}</h2>
//       <img src={restaurant.image} alt={restaurant.name} className="restaurant-details-img" />
//       <p className="restaurant-info">Description: {restaurant.description}</p>
//       <p className="restaurant-info">Rating: {restaurant.rating}</p>
//       <div className="image-carousel">
//         {restaurant.images.map((img, idx) => (
//           <img key={idx} src={img} alt={`${restaurant.name} ${idx + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SingleRestaurant;
import React from "react";
import { useParams } from "react-router-dom"; // Corrected import
import restaurant from "./RestaurantDataBase";

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurant = restaurantData.find(rest => rest.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="restaurant-details">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-details-img" />
      <p className="restaurant-info">Description: {restaurant.description}</p>
      <p className="restaurant-info">Rating: {restaurant.rating}</p>
      <div className="image-carousel">
        {restaurant.images.map((img, idx) => (
          <img key={idx} src={img} alt={`${restaurant.name} ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default SingleRestaurant;
