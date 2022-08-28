import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './SearchBar'
//import { useLocation } from 'react-router-dom'; 


function App() {
  // const location = useLocation();

  // if(!location.state){
  //   location.state.query = ""
  // }

  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
