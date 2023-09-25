import './App.css';
import Card from './Card';
import dataJson from './data/data.json';
import { useState } from 'react';

function App() {
  const [categories] = useState(dataJson);

  return (
    <div className='wrapper'>
      <div className='container'>
        {categories.map((category, idx) => {
          return (
            <Card key={idx} {...category}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
