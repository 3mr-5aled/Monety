import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpensesListItem.jsx";
import selectExpenses from "../selectors/expenses.jsx";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
