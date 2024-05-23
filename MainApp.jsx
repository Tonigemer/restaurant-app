import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRestaurants from "./AllRestaurants";  
import SingleRestaurant from "./SingleRestaurant";  
import "./appStyles.css";

const MainApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const updateCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const updateSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredRestaurants = (restaurants, category, term) => {
    let filtered = category === "all" ? restaurants : restaurants.filter(rest => rest.cuisine === category);
    return term === "" ? filtered : filtered.filter(rest => rest.city.toLowerCase().includes(term.toLowerCase()));
  };

  return (
    <Router>
      <div>
        <header className="app-header">Savory Street</header>
        <nav className="top-nav">
          <div className="filter-search">
            <div className="search-wrapper">
              <label htmlFor="search"></label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={updateSearch}
                placeholder="Search ..."
              />
            </div>
            <button className="nav-button">Home</button> 
            <button className="nav-button">Add Restaurant</button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={
            <AllRestaurants
              selectedCategory={selectedCategory} 
              searchTerm={searchTerm}
              updateCategory={updateCategory}
            />
          } />
          <Route path="/restaurant/:id" element={<SingleRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}
export default MainApp;
