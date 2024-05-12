import { Button, Form } from 'react-bootstrap';
import Data from '../data.json';
import { useState, useEffect } from 'react'
import RestaurantResult from '../RestaurantResult';
import { useLocation } from 'react-router-dom'; 
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar(){
  const location = useLocation();
  const [query, setQuery] = useState("")
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if(location.state){
      setQuery(location.state.query);
    }
  },[])

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
    <div className='search-bar'>
      <TextField 
        className='search-box' 
        placeholder="Search Restaurants" 
        onChange={event => setQuery(event.target.value)} 
        value={query} 
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
      />
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
