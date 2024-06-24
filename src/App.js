
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import {Routes, Route } from 'react-router-dom';
import Searchview from './Components/Searchview';
import Movieview from './Components/Movieview';

function App() {
 

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  console.log(searchText)

  
  useEffect(() => {
    if(searchText){
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}s&include_adult=false&language=en-US&page=1&api_key=b766dc205257db336facdb9e8e5ace70`)
        .then(repsonse => repsonse.json())
        .then(data => {
         setSearchResults(data.results)
        })
    }
  }, [searchText])


return (
  <div className="App">
    <Navbar searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='/search' element={<Searchview keyword={searchText} searchResults={searchResults} />} />
      <Route path='/movies/:id' element={<Movieview />} />
    </Routes>
  </div>
);
}

export default App;
