import Data from '../data.json';
import { useState, useEffect } from 'react'
import Review from '../Review'
import { useParams, useLocation } from "react-router-dom";
import NavBar from '../NavBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';


function Restaurant() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [restaurantId, setRestaurantId] = useState(0)
    const location = useLocation();
    const [query, setQuery] = useState(location.state.query);

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
        <div className='App'>
            { name && restaurantId > 0 ? (
                <div>
                    <NavBar query={query} name={name}/>

                    <Card>
                        <CardHeader
                            sx={{ width: "90%", margin: "auto" }}
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            // action={
                            // <IconButton aria-label="settings">
                            //     <MoreVertIcon />
                            // </IconButton>
                            // }
                            title={name}
                            subheader={
                                <Chip label={`${rating}/5`} />
                            }
                        />
                        <CardContent sx={{ width: "90%", margin: "auto" }}>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>

                            <List>
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
                            </List>
                        </CardContent>
                    </Card>


                    
            </div>
            ) : null }

        </div>
    )
    
}

export default Restaurant;
