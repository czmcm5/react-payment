import { Route, Routes } from "react-router-dom";
import CardPayment from "./page/CardPayment";
import AddCard from "./page/AddCard";

function App() {
  return (
    <Routes>
      <Route path="/" Component={CardPayment} />
      <Route path="/add" Component={AddCard} />
    </Routes>
  );
}

export default App;
