//import Data from '../data.json';
import { useState, useEffect } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Chip from '@mui/material/Chip';


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
        <>
        <ListItem 
            secondaryAction={
                <Chip label={`${rating}/5`} />
            }
            // onClick={() => navigate(`/restaurant/${props.id}`, {state:{query:props.query}})}
        >
            <ListItemAvatar>
                <Avatar>
                    <RestaurantIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} secondary={comment} />
        </ListItem>
        <Divider component="li" />
        </>
    )
    
}

export default Review;