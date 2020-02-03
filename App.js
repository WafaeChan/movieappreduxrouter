import React, { Component } from 'react'
import './App.css';
import MovieList from './components/movielist';
import RatingFilter from '../src/components/rating'
import PlusMovie from '../src/components/addmovie'
import SearchBar from './components/searchbar';
import DescriptionMovie from './components/description'
import { BrowserRouter, Route } from 'react-router-dom';






class App extends  Component {
  constructor(props){
    super(props);
    this.state={
      search:'',
      rating:'',
    }
    
    }
  
  render(){
    return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
      <div className="header">
         <SearchBar />
         <RatingFilter/>
     
      </div>
      <div className="moviesection">
      <div className="mymovielist">
                <MovieList />
        </div>
        <div className="addmovie">
        <PlusMovie />
        </div>
        </div>
        </Route>
        <Route path="/:id_movie" component={DescriptionMovie}/>
        </BrowserRouter>
    </div>
  );
  }
  
}

export default App;
