import "./ExpenseItem.css"

const ExpenseItem = (props) => {


   return (
       <div className="expense-item">
           {/* single and multiline comments in JSX */}
           <div>{props.expDate}</div>
           <div className="expense-item__description">
               <h2>{props.expTitle}</h2>
               <p className="expense-item__price">Rs {props.expAmount}</p>
           </div>
       </div>
   )
}
export default ExpenseItem;
