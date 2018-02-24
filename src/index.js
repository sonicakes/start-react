import React from 'react';
import { render } from 'react-dom';
import Test from './Test';

fetch(
  "https://pokeapi.co/api/v2/pokemon/1/")
  .then(response =>response.json())
.then(json =>console.log(json));

const shopping = [
  "giraffe",
  "elephant"];
const App = () => (
  <div>
    <Test title="what to buy" shopping={shopping} />
    


  </div>
);

render(<App />, document.getElementById('root'));
