import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard.js"

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const [saveMovie, setSaveMovie] = useState(false)
  // need to put null here because {} would cause an error in code.
  // Null explicitly states that it is empty while an empty useState or an empty object in useState may not be clear.
  console.log(props)
 
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
      const addToSavedList = props.addToSavedList;
      console.log("Working?", movie)
      return addToSavedList(movie)

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  console.log(movie);

  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie}/>
      <div onClick={() => setSaveMovie(true)} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
