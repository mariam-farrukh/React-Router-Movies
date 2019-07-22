import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import { Route } from "react-router-dom";
import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
