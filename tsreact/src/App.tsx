import React, { useState } from "react";
import List from './components/List'
import AddToList from "./components/AddToList";
import './App.css';

export interface IState {
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
    url: 'http://pm1.narvii.com/6919/8beca77c10bb36006feea5fb564722621025048dr1-500-393v2_uhq.jpg',
    age: 10,
    note: 'very cute'
  },
  {
    name: 'chan',
    url: 'https://www.wallpapertip.com/wmimgs/99-996966_teemo-teemo-wallpaper-phone.jpg',
    age: 17
  },
  {
    name: 'Hyungwoo',
    url: 'https://vueschool.io/articles/wp-content/uploads/2017/12/why-js.png',
    age: 17,
    note: 'I love JS and swift is trash'
  }]);

  return (
    <div className="App">
      <h1>People!</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;