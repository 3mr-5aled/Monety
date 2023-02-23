import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from "./store/configureStore.jsx";
import { addExpense } from "./actions/expenses.jsx";
import { setTextFilter } from "./actions/filters.jsx";
import getVisibleExpenses from "./selectors/expenses.jsx";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(
    addExpense({ description: "Coffee {hot}", amount: 30, createdAt: -200 })
);
store.dispatch(
    addExpense({ description: "Coffee {cold}", amount: 20, createdAt: -100 })
);
store.dispatch(
    addExpense({ description: "Rent", amount: 1400, createdAt: -300 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
createRoot(document.getElementById("app")).render(jsx);
