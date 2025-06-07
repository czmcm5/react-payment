import { Route, Routes } from 'react-router-dom';
import Payment from './page/Payment/Payment';
import AddCard from './page/AddCard/AddCard';
import AddSuccess from './page/AddSuccess.tsx';
import CardList from './page/CardList';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Payment} />
      <Route path="/list" Component={CardList} />
      <Route path="/add" Component={AddCard} />
      <Route path="/add-sucess" Component={AddSuccess} />
    </Routes>
  );
}

export default App;
