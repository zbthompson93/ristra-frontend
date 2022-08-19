import { Button, Form } from 'react-bootstrap';
import Data from '../data.json';
import { useState, useEffect } from 'react'
import Restaurant from '../Restaurant';
import RestaurantResult from '../RestaurantResult';


export default function SearchBar (){
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(
      Data.restaurants.filter(restaurant => {
        if (query === '') {
          return;
        } else if (restaurant.name.toLowerCase().includes(query.toLowerCase())) {
          console.log(restaurant.name)
          return restaurant;
        }
      })
    )
  },[query]);

  return (
    <div>
      <input placeholder="Search Restaurants" onChange={event => setQuery(event.target.value)} />
      {restaurants.map((restaurant, index) => {
        return (
          <RestaurantResult 
            key={index} 
            id={restaurant.id}
            name={restaurant.name} 
            description={restaurant.description}
            reviews={restaurant.reviews} 
          />
        )
        })
      }
    </div>
  )
}
