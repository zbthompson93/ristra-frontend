import Data from '../data.json';
import { useState, useEffect } from 'react'


function Restaurant() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        setRestaurants(
            Data.restaurants.map((restaurant) => {
                console.log(restaurant.name)
                return (
                  <div className="box" key={restaurant.id}>
                    <p>{restaurant.name}</p>
                    <p>{restaurant.description}</p>
                  </div>
                )
            })
        )
      },[]);

    return(
        <div>
            {restaurants}
        </div>
    )
    
}

export default Restaurant;
