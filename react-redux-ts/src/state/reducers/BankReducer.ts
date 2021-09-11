const initialState = 0;

interface DepositAction {
    type: 'deposit',
    payload: number
}

interface WidthrawAction {
    type: 'widthraw',
    payload: number
}

interface BankruptAction {
    type: 'bankrupt'
}

type Action = DepositAction | WidthrawAction | BankruptAction;


const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "widthraw":
            return state - action.payload;
        case "bankrupt":
            return 0;
        default:
            return state;
    }
}

export default reducer;