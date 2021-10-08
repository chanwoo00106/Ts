import { Wrapper, AddTodo } from './App.styles';
import { Todos } from './components/Todos';

function App() {
  return (
    <Wrapper>
      <h1>Ts Todo List</h1>
      <AddTodo>
        <input placeholder="할일 입력" type="text" />
        <button>add</button>
      </AddTodo>
      <Todos />
    </Wrapper>
  );
}

export default App;
