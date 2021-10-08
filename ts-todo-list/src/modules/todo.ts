import data from '../db/data.json';
import produce from 'immer';

const ADD = 'todo/ADD' as const;
const TOGGLE = 'todo/TOGGLE' as const;

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

type ActionType =
    | ReturnType<typeof add>
    | ReturnType<typeof toggle>;

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

        default: return state;
    }
}

export default todo;