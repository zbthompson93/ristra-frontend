import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './SearchBar'
import './App.css'


function App() {
  // const location = useLocation();

  // if(!location.state){
  //   location.state.query = ""
  // }

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
