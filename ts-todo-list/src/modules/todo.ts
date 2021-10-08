import data from '../db/data.json';
import produce from 'immer';

const ADD = 'todo/ADD' as const;
const TOGGLE = 'todo/TOGGLE' as const;
const REMOVE = 'todo/REMOVE' as const;

export interface Data {
    id: number;
    title: string;
    date: string;
    toggle: boolean;
}

export const add = (title: string, date: string) => ({
    type: ADD,
    payload: {
        title,
        date
    }
});

export const toggle = (id: number) => ({ type: TOGGLE, id });
export const remove = (id: number) => ({ type: REMOVE, id });


type ActionType =
    | ReturnType<typeof add>
    | ReturnType<typeof toggle>
    | ReturnType<typeof remove>;

let idx: number = 4
const initialState: Data[] = data;

function todo(state = initialState, action: ActionType) {
    switch (action.type) {
        case ADD:
            return produce(state, draft => {
                draft.push({
                    ...action.payload,
                    id: idx++,
                    toggle: false,
                })
            });

        case TOGGLE:
            return produce(state, draft => {
                const index = draft.findIndex(i => i.id === action.id);
                draft[index].toggle = !draft[index].toggle;
            });

        case REMOVE:
            return { ...state.filter(i => i.id !== action.id) }

        default: return state;
    }
}

export default todo;