import React from 'react';
import { render } from 'react-dom';
import Test from './Test';


const shopping = [
  "giraffe",
  "elephant"];
const App = () => (
  <div>
    <Test title="what to buy" shopping={shopping} />
    


  </div>
);

render(<App />, document.getElementById('root'));
