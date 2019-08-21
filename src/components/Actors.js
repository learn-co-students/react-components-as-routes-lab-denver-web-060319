import React from 'react';
import { actors } from '../data';

const actorsList = actors.map(actor =>
  <div>
    <h3>{actor.name}</h3>
    <ul>
      {actor.movies.map(movie =>
        <li>{movie}</li>  
      )}
    </ul>
  </div>  
)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
