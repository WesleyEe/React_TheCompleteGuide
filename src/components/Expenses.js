import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expense_arr[0].title}
        amount={props.expense_arr[0].amount}
        date={props.expense_arr[0].date}
      />
      <ExpenseItem
        title={props.expense_arr[1].title}
        amount={props.expense_arr[1].amount}
        date={props.expense_arr[1].date}
      />
      <ExpenseItem
        title={props.expense_arr[2].title}
        amount={props.expense_arr[2].amount}
        date={props.expense_arr[2].date}
      />
      <ExpenseItem
        title={props.expense_arr[3].title}
        amount={props.expense_arr[3].amount}
        date={props.expense_arr[3].date}
      />
    </div>
  );
}

export default Expenses;
