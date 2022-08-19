//import Data from '../data.json';
import { useState, useEffect } from 'react'
import Review from '../Review'


function Restaurant(props) {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [reviews, setReviews] = useState(props.reviews);
    const [rating, setRating] = useState(0);
    
    useEffect(() => {
        setName(props.name)
        setDescription(props.description)
        setReviews(props.reviews)

        let count = 0;
        let ratingCount = 0;
        for(let i = 0; i < reviews.length; i++){
            ratingCount += reviews[i].rating;
            count++
        }

        setRating(ratingCount/count)

    },[props.name]);

    return(
        <div>
            <h1>Name: {name}</h1>
            <p>description: {description}</p>
            <p>rating: {rating}</p>

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
    )
    
}

export default Restaurant;
