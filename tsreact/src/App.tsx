import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('teemo');

  const changeName = ():void => {
    if (user === 'teemo') setUser('cute');
    else setUser('teemo');
  }
  
  return (
    <div className="App">
      <p>{user}</p>
      <button onClick={changeName}>Change</button>
      <Profile name="chan" age={17} />
    </div>
  );
}

function Profile(props:{name :string, age :number}) :JSX.Element {
  return (
    <div>my name is {props.name}.<br />I'm {props.age} years old </div>
  );
}

export default App;
