import React, { useReducer } from 'react';

type Color = 'red' | 'yellow' | 'orange';

type State = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean
}

type Action = { type: 'SET_COUNT', count: number } |
{ type: 'SET_TEXT', text: string } |
{ type: 'SET_COLOR', color: Color } |
{ type: 'TOOGLE_GOOD' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOOGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default: return state;
    }
}

export default function UseReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: "",
        color: 'red',
        isGood: true
    })
    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'Teemo!' });
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
    const toggleGood = () => dispatch({ type: 'TOOGLE_GOOD' });
    return (
        <>
            <div><p>{state.count}</p></div>
            <div><p>{state.text}</p></div>
            <div><p>{state.color}</p></div>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                {state.isGood && <button onClick={toggleGood}>TOOGLE_GOOD</button>}
            </div>
        </>
    )
}
