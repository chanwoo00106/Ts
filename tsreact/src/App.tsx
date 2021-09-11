import React, { useState } from "react";
import List from './components/List'
import './App.css';

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: 'teemo',
    url: '',
    age: 10,
    note: 'very cute'
  },
  {
    name: 'chan',
    url: '',
    age: 17
  },
  {
    name: 'Hyungwoo',
    url: '',
    age: 17,
    note: 'studying JS'
  }]);

  return (
    <div className="App">
      <h1>People!</h1>
      <List people={people} />
    </div>
  );
}

export default App;