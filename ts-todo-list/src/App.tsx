import { useDispatch } from 'react-redux';
import { add } from './modules/todo';
import { Wrapper, AddTodo } from './App.styles';
import { Todos } from './components/Todos';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const inputDate = new Date(date);
    if (text === "") {
      alert("할일를 입력해 주세요!");
      return;
    }
    if (isNaN(inputDate.getMonth())) {
      alert("날짜를 입력해 주세요!");
      return;
    }
    dispatch(add(text, `${inputDate.getFullYear()}/${inputDate.getMonth() + 1}/${inputDate.getDate()}`));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

  return (
    <Wrapper>
      <h1>Ts Todo List</h1>
      <AddTodo onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="할일 입력" type="text" value={text} />
        <input type="date" className="date" value={date} onChange={dateChange} />
        <button>add</button>
      </AddTodo>
      <Todos />
    </Wrapper>
  );
}

export default App;
