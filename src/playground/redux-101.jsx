import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy,
});

const setCount = ({ count = 0 } = {}) => ({
    type: "SET",
    count,
});

const resetCount = () => ({
    type: "RESET",
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy =
                typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy,
            };
        case "DECREMENT":
            const decrementBy =
                typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy,
            };
        case "SET":
            return {
                count: action.count,
            };
        case "RESET":
            return {
                count: 0,
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

// unsubscribe()

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ count: 101 }));
