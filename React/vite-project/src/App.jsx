
import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {

  return (
   <div className='App'>
    <h1>Lets get started</h1>
    <ExpenseItem expDate="20-12-2020" expTitle="Mytra shoping" expAmount="2500"/>
    <ExpenseItem expDate="26-12-2020" expTitle="amazon" expAmount="2000"/>
    <ExpenseItem expDate="26-12-2020" expTitle="flipkart shoping" expAmount="3000"/>

   </div>
  )
}

export default App

