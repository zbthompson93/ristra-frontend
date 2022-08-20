import Data from '../data.json';
import { useState, useEffect } from 'react'
import Review from '../Review'
import { useParams } from "react-router-dom";


function Restaurant() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [restaurantId, setRestaurantId] = useState(0)

    let params = useParams();

    function getData(params){
        const data = Data.restaurants.filter(restaurant => {
            if (restaurant.id == params.restaurantId) {
                return restaurant;
            }
        })
        return data;
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(params)

            setName(data[0].name)
            setDescription(data[0].description)
            setReviews(data[0].reviews)

            let count = 0;
            let ratingCount = 0;
            for(let i = 0; i < data[0].reviews.length; i++){
                ratingCount += data[0].reviews[i].rating;
                count++
            }

            setRating(ratingCount/count)

            setRestaurantId(params.restaurantId)
        }
        fetchData();
    },[restaurantId, name]);

    return(
        <div>
            { name && restaurantId > 0 ? (
                <div>
                <h1>Name: {name}</h1>
                <p>description: {description}</p>
                <p>rating: {rating}</p>
                <p>{params.restaurantId}</p>

                {reviews.map((review, index) => {
                    return (
                        <Review 
                            key={index} 
                            user={review.user} 
                            rating={review.rating}
                            comment={review.comment} 
                        />
                    )
                })
            }
            </div>
            ) : null }

        </div>
    )
    
}

export default Restaurant;
