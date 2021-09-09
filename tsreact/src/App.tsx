import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface data {
  [key: string]: string | number | data;
}

function App() {
  const [user, setUser] = useState('teemo');
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setData(data);
      })
  })

  const changeName = (): void => {
    if (user === 'teemo') setUser('cute');
    else setUser('teemo');
  }

  const onChange = (e: { target: { value: string } }) => setInput(e.target.value);

  return (
    <div className="App">
      <h1>{user}</h1>
      <button onClick={changeName}>Change</button>
      <h1>{input}</h1>
      <input onChange={onChange} value={input} />
      <div className="dataFild">
        {data.map((dt: data, i): JSX.Element => (
          <div className="card" key={i}>
            <p>name: {dt.name}</p>
            <p>email: {dt.username}</p>
            <p>phone: {dt.phone}</p>
          </div>
        ))}
      </div>
      <Profile name="chan" age={17} />
    </div>
  );
}

function Profile(props: { name: string, age: number }): JSX.Element {
  return (
    <div>my name is {props.name}.<br />I'm {props.age} years old </div>
  );
}

export default App;
