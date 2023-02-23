import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter.jsx"
import configureStore from "./store/configureStore.jsx"
import { addExpense } from "./actions/expenses.jsx"
import { setTextFilter } from "./actions/filters.jsx"
import getVisibleExpenses from "./selectors/expenses.jsx"
import "normalize.css/normalize.css"
import "./styles/style.scss"

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
createRoot(document.getElementById("app")).render(jsx)
