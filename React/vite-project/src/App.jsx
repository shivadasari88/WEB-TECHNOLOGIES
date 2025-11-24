import './App.css';
import NewExpense from './components/NewExpense';

function App() {
  const expenses = [
    {title:"Shopping", amount:2000, date:new Date(2022, 1, 2)},
    {title:"Groceries", amount:7000, date:new Date(2022, 5, 6)},
    {title:"Movies", amount:4000, date:new Date(2022, 1, 5)}
  ]

  const addExpenseHandler = expense => {
    console.log("In App component ", expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      //rest of  your code
    </div>
  );
}

export default App;
