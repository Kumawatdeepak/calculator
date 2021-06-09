const initialstate = '';

const calculatorReducers = (state = initialstate, action) => {

    switch (action.type) {
        case "EQUAL_TO":
            state = eval(action.data);
            return state;
        // case "CUT":
        //     const str = action.data;
        //     state = str.slice(0, -1);
        //     return state;
        case "CLEAR":
            state = action.data;
            state = '';
            return state;
        default: return state;
    }
}
export default calculatorReducers;
