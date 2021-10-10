import { useDispatch } from 'react-redux';
import { toggle, remove, change } from '../modules/todo';
import { faCheckCircle as checkedCricle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


interface Props {
    data: {
        id: number;
        title: string;
        date: string;
        toggle: boolean;
    }
}

export const TodoList: React.FC<Props> = ({ data }) => {
    const [titleChange, setTitleChange] = useState({ TF: true, value: data.title });
    const [dateChange, setDateChange] = useState(true);

    const dispatch = useDispatch();

    const onClick = () => dispatch(toggle(data.id));

    const Delete = (e: any) => {
        e.preventDefault();
        if (window.confirm("정말 삭제하시겠습니까?")) dispatch(remove(data.id))
    }

    const Change = (e: React.MouseEvent<HTMLParagraphElement>) => {
        if (e.currentTarget.id === "title") {
            setTitleChange({
                ...titleChange,
                TF: false
            });
        }

        else if (e.currentTarget.id === "date") {
            setDateChange(false);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitleChange({
                ...titleChange,
                value: e.target.value
            });
        } else if (e.target.name === "date") {
            setDateChange(true);
            dispatch(change(data.id, "", e.target.value));
        }
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setTitleChange({
                ...titleChange,
                TF: true
            });
            dispatch(change(data.id, titleChange.value));
        }
    }

    return (
        <li onContextMenu={Delete}>

            {titleChange.TF ? (
                <h3
                    onDoubleClick={Change}
                    id="title"
                    className={data.toggle ? "line" : ""}
                >
                    {data.title}
                </h3>
            ) : (
                <input
                    type="text"
                    value={titleChange.value}
                    onKeyPress={onKeyPress}
                    className="changeInput"
                    name="title"
                    onChange={onChange}
                />
            )}

            <div className="information">

                {dateChange ? (
                    <p
                        onDoubleClick={Change}
                        id="date"
                        className={data.toggle ? "line" : ""}
                    >
                        {data.date}
                    </p>
                ) : (
                    <input type="date" name="date" onChange={onChange} />
                )}

                {data.toggle ? (
                    <FontAwesomeIcon onClick={onClick} className="check" size='lg' icon={checkedCricle} />
                ) : (
                    <FontAwesomeIcon onClick={onClick} className="check" size='lg' icon={faCheckCircle} />
                )}
            </div>
        </li>
    )
}
