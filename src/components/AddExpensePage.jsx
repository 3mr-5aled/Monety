import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm.jsx";
import { addExpense } from "../actions/expenses.jsx";
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>add expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    navigate("/");
                }}
            />
        </div>
    );
};

export default connect()(AddExpensePage);
