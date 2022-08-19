import { Button, Form } from 'react-bootstrap';
import Data from '../data.json';
import { useState, useEffect } from 'react'


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

  console.log(restaurants)

  return (
    <div>
      <input placeholder="Search Restaurants" onChange={event => setQuery(event.target.value)} />
      {restaurants.map((restaurant, index) => {
        return (
          <div key={index}>
            <p key={index}>{restaurant.name}</p>
            <p>{restaurant.description}</p>
          </div>
        )
        })
      }
    </div>
  )
}
