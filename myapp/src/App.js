import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import React ,{useState} from 'react';
import {Routes , Route } from 'react-router-dom' ;
import Search from  "./Search";
import Details from './Details';

function App() {
  const [keysearch, setKeysearch] = useState("")
  const [newRate, setNewRate] = useState(1)
const [movies,setMovies] = useState ([
  {
    id: 1,
    title: "Bright",
    image: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    description: "More human than human is our motto.",
    genre: ["comedy", "action"],
    rate: '3',
    trailer:  "https://youtu.be/yjRHZEUamCc"
   

},
{
    id: 2,
    title: "Justice League",
    image: "",
    description: "You can't save the world alone.",
    genre: ["romance", "action"],
    rate: "5",
    trailer: "https://youtu.be/yjRHZEUamCc"
   
},
{
  id: 3,
  title: "john wick",
  image: "",
  description: "You can't save the world alone.",
  genre: ["romance", "action"],
  rate: "4",
  trailer:  "https://youtu.be/yjRHZEUamCc"
},

])
const search=(text)=>{
setKeysearch(text)
}
const setRate=(rate)=>{
  setNewRate(rate)
}
return (
<div className="App">

<Search search={search} setRate={setRate}/>
<Routes>  
<Route path='/' element= {<MoviesList movies={movies.filter( (movie)=> movie.rate >= newRate && movie.title.toLowerCase().includes(keysearch.trim().toLocaleLowerCase()) )}/>}/> 
<Route path='/movie/:id' element={<Details movie={movies}/>}/>
</Routes>
</div>
);


}
export default App;
