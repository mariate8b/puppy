import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data.js';


function App() {

  const [puppies, setPuppies] = useState(puppyList);

  const [featPupId, setFeatPupId] = useState(null);

  
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <div className="logo-container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="puppy-list">
        <h2>Puppy List</h2>
        {puppies.map((puppy) => (
          <p 
            onClick={() => setFeatPupId(puppy.id)} 
            key={puppy.id}
            className="puppy-name"
          >
            {puppy.name}
          </p>
        ))}
      </div>
      {featPupId && featuredPup && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;