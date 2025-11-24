import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
import React, {useState} from 'react';

const NewExpense = (props) => {

    /*const [showForm, setShowForm] = useState(false)

    const showFormHandler = () => {
        setShowForm(true)
    }
    const stopShowForm = () => {
        setShowForm(false)
    }*/

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id:Math.random().toString()
        }
        //console.log("In NewExpense ",expenseData)
        props.onAddExpense(expenseData)
    }
    return(
        <div className="new-expense">
           {/* {!showForm && <button onClick={showFormHandler}>Add New Expense </button>}
            {showForm && <ExpenseForm onCancel={stopShowForm} onSaveExpenseData={saveExpenseDataHandler}/>}*/}
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default  NewExpense;
