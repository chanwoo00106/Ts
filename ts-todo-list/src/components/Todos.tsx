import { Wrapper } from "./Todos.styles";
import data from '../db/data.json';
import { TodoList } from './TodoList';


export const Todos = () => {
    return (
        <Wrapper>
            {data.map(d => (
                <TodoList key={d.id} data={d} />
            ))}
        </Wrapper>
    )
}
