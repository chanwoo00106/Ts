import { Wrapper } from "./Todos.styles";
import { reducerType } from "../modules";
import { Data } from "../modules/todo";
import { TodoList } from './TodoList';
import { useSelector } from "react-redux";


export const Todos = () => {
    const data = useSelector((state: reducerType): Data[] => state.todo);
    return (
        <Wrapper>
            {data.map(d => (
                <TodoList key={d.id} data={d} />
            ))}
        </Wrapper>
    )
}
