// import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from 'react';
import data from './babyNamesData.json'

function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    const sortedNames = data.sort((a, b) => a.name.localeCompare(b.name));
    setNames(sortedNames);
  }, []);

  return (
    <div className="App">
      <h1>Baby Names</h1>
      <ul className="names">
        {names.map((name) => (
          <span key={name.id} className={name.sex === "m" ? "boy" : "girl"}>
            {name.name}
          </span>
        ))}
      </ul>
    </div>
  );
}

export default App;

/**
 * Level 1: 
 * display all the names in a single div, using span elements to wrap each name. 
 * Apply the boy or girl class name to each span element based on the sex property.
 */
