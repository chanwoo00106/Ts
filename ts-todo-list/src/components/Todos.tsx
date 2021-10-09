import { Wrapper } from "./Todos.styles";
import { reducerType } from "../modules";
import { Data } from "../modules/todo";
import { TodoList } from './TodoList';
import { useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";


export const Todos = () => {
    const data = useSelector((state: reducerType): Data[] => state.todo);
    return (
        <Wrapper>
            <DndProvider backend={HTML5Backend}>
                {data.map(d => (
                    <TodoList key={d.id} data={d} />
                ))}
            </DndProvider>
        </Wrapper>
    )
}
