import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const transaction = transactions.map(transaction => transaction.amount)
  const amount = transaction.reduce( (acc,amt) => (acc += amt),0).toFixed(2)
  return (
    <>
        <h4>Your Balance</h4>
        <h1>${amount}</h1>
    </>
  )
}
