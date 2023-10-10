import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  // for income
  const trans_income = transactions.filter(transaction => transaction.amount > 0) 
  const transaction_incm = trans_income.map(transaction => transaction.amount)
  const income = transaction_incm.reduce( (acc,incm) => ( acc += incm),0)
  // for expense
  const trans_expense = transactions.filter( (transaction) => transaction.amount < 0);
  const transaction_expense = trans_expense.map( transaction => transaction.amount)
  const expense = transaction_expense.reduce( (acc,expns) => ( acc += expns),0)
  return (
    <>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{Math.abs(expense)}</p>
        </div>
      </div>

    </>
  )
}
