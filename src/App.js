import logo from "./logo.svg";
import "./App.css";
import Balance from "./Balance/Balance.js";
import Card from "./Components/Card";
import ExpenseDetail from "./Detail/ExpenseDetail/ExpenseDetail";

function App() {
  return (
    <Card>
      <Balance></Balance>
      <ExpenseDetail></ExpenseDetail>
    </Card>
  );
}

export default App;
