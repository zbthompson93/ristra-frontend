import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function NavBar(props) {

  let navigate = useNavigate();

  return (
    <div>
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/', {state:{query:props.query}})}>Back</Button>
    </div>
  );
}

