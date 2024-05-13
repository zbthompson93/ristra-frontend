import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Chip from '@mui/material/Chip';


function RestaurantResult(props) {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [reviews, setReviews] = useState(props.reviews);
    const [rating, setRating] = useState(0);
    const [id, setId] = useState(props.id);
    const [query, setQuery] = useState(props.query);

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
        <>
        <ListItem 
            className='restaurant-result' 
            secondaryAction={
                <Chip label={`${rating}/5`} />
            }
            onClick={() => navigate(`/restaurant/${props.id}`, {state:{query:props.query}})}
        >
            <ListItemAvatar>
                <Avatar>
                    <RestaurantIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={description} />
        </ListItem>
        <Divider component="li" />
        </>
    )
    
}

export default RestaurantResult;
