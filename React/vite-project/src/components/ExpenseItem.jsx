import "./ExpenseItem.css"

const ExpenseItem = () => {

    const expDate = new Date(2021, 7, 11);
    const expTitle = "Paid carpenter";
    const expAmount = 75000

   return (
       <div className="expense-item">
           {/* single and multiline comments in JSX */}
           <div>{expDate.toISOString()}</div>
           <div className="expense-item__description">
               <h2>{expTitle}</h2>
               <p className="expense-item__price">Rs {expAmount}</p>
           </div>
       </div>
   )
}
export default ExpenseItem;
