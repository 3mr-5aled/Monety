import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            end
            to="/"
        >
            Dashboard
        </NavLink>
        <NavLink
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            to="create"
        >
            Create Expense
        </NavLink>
    </header>
);

export default Header;
