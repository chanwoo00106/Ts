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
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
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