import 'bootstrap/dist/css/bootstrap.css';
//import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function NavBar(props) {
  //const [anchorElNav, setAnchorElNav] = True;
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  let navigate = useNavigate();

  return (
    // <div>
    //     <Button onClick={() => navigate('/')}>Home</Button>
    //     <Button onClick={() => navigate('/', {state:{query:props.query}})}>Back</Button>
    // </div>
    <AppBar position="static">
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate('/', {state:{query:props.query}})}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
          {/* <Button color="inherit" onClick={() => navigate('/', {state:{query:props.query}})}>Back</Button> */}
        </Toolbar>
    </AppBar>
  );
}

