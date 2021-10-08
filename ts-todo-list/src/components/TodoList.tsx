import { useDispatch } from 'react-redux';
import { toggle } from '../modules/todo';
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

    return (
        <li onClick={onClick}>
            <h3>{data.title}</h3>
            <div className="information">
                <p>{data.date}</p>
                {data.toggle ? (
                    <FontAwesomeIcon className="check" size='lg' icon={checkedCricle} />
                ) : (
                    <FontAwesomeIcon className="check" size='lg' icon={faCheckCircle} />
                )}
            </div>
        </li>
    )
}
