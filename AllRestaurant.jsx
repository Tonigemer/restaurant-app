import React from "react";
import { Link } from "react-router-dom";
import restaurant from "./RestaurantDataBase";

const AllRestaurants = ({ selectedCategory, searchTerm, updateCategory }) => {
  const getFilteredRestaurants = (restaurants, category, term) => {
    let filtered = category === "all" ? restaurants : restaurants.filter(rest => rest.cuisine === category);
    return term === "" ? filtered : filtered.filter(rest => rest.city.toLowerCase().includes(term.toLowerCase()));
  };

  return (
    <div className="restaurants-display">
      {getFilteredRestaurants(restaurantData, selectedCategory, searchTerm).map((rest) => (
        <Link to={`/restaurant/${rest.id}`} key={rest.id} className="restaurant-card">
          <img src={rest.image} alt={rest.name} className="restaurant-pic" />
          <p className="restaurant-title">{rest.name}</p>
          <p className="restaurant-city">City: {rest.city}</p>
          <p className="restaurant-price">Price: {rest.price}₪</p>
          <p className="restaurant-cuisine">Cuisine: {rest.cuisine}</p>
        </Link>
      ))}
    </div>
  );
}

export default AllRestaurants;
