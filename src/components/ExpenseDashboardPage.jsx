import React from "react";
import ExpenseList from "./ExpensesList.jsx";
import ExpensesListFilter from "./ExpensesListFilter.jsx";

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
