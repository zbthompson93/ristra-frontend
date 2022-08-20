import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function RestaurantResult(props) {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [reviews, setReviews] = useState(props.reviews);
    const [rating, setRating] = useState(0);
    const [id, setId] = useState(props.id);

    let navigate = useNavigate();
    
    useEffect(() => {
        setName(props.name)
        setDescription(props.description)
        setReviews(props.reviews)
        setId(props.id)

        let count = 0;
        let ratingCount = 0;
        for(let i = 0; i < reviews.length; i++){
            ratingCount += reviews[i].rating;
            count++
        }

        setRating(ratingCount/count)

    },[props.name]);

    return(
        <div onClick={() => navigate(`/restaurant/${props.id}`)}>
            <h1>Name: {name}</h1>
            <p>description: {description}</p>
            <p>rating: {rating}</p>
        </div>
    )
    
}

export default RestaurantResult;
