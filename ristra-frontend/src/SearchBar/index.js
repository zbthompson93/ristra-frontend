import { Button, Form } from 'react-bootstrap';
import Data from '../data.json';
import { useState, useEffect } from 'react'
import RestaurantResult from '../RestaurantResult';
import { useLocation } from 'react-router-dom'; 


export default function SearchBar(){
  const location = useLocation();
  const [query, setQuery] = useState(location.state.query);
  const [restaurants, setRestaurants] = useState([]);

  console.log(location.state.query)

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
      <input placeholder="Search Restaurants" onChange={event => setQuery(event.target.value)} value={query} />
      {restaurants.map((restaurant, index) => {
        return (
          <RestaurantResult 
            key={index} 
            id={restaurant.id}
            name={restaurant.name} 
            description={restaurant.description}
            reviews={restaurant.reviews} 
            query={query}
          />
        )
        })
      }
    </div>
  )
}
