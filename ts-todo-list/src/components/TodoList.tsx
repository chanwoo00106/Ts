import { useDispatch } from 'react-redux';
import { toggle, remove } from '../modules/todo';
import { faCheckCircle as checkedCricle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    data: {
        id: number;
        title: string;
        date: string;
        toggle: boolean;
    }
}

export const TodoList: React.FC<Props> = ({ data }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(toggle(data.id));
    const Delete = (e: any) => {
        e.preventDefault();
        if (window.confirm("정말 삭제하시겠습니까?")) {
            console.log("삭제", data.id)
            dispatch(remove(data.id))
        }
    }

    return (
        <li onContextMenu={Delete}>
            <h3 className={data.toggle ? "line" : ""}>{data.title}</h3>
            <div className="information">
                <p className={data.toggle ? "line" : ""}>{data.date}</p>
                {data.toggle ? (
                    <FontAwesomeIcon onClick={onClick} className="check" size='lg' icon={checkedCricle} />
                ) : (
                    <FontAwesomeIcon onClick={onClick} className="check" size='lg' icon={faCheckCircle} />
                )}
            </div>
        </li>
    )
}
