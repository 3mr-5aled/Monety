import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Header from "../components/Header.jsx"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.jsx"
import AddExpensePage from "../components/AddExpensePage.jsx"
import EditExpensePage from "../components/EditExpensePage.jsx"
import HelpExpensePage from "../components/HelpExpensePage.jsx"
import NotFoundPage from "../components/NotFoundPage.jsx"

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="create" element={<AddExpensePage />} />
      <Route path="edit/:id" element={<EditExpensePage />} />
      <Route path="help" element={<HelpExpensePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
