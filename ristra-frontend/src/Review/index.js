//import Data from '../data.json';
import { useState, useEffect } from 'react'


function Review(props) {
    const [user, setUser] = useState(props.user);
    const [rating, setRating] = useState(props.rating);
    const [comment, setComment] = useState(props.comment);
    
    useEffect(() => {
        setUser(props.user)
        setRating(props.rating)
        setComment(props.comment)
    },[props.user]);

    return(
        <div>
            <p>User: {user}</p>
            <p>Rating: {rating}</p>
            <p>Comment: {comment}</p> 
        </div>
    )
    
}

export default Review;