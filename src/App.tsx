
import BoardPage from './pages/BoardPage';
import {BrowserRouter , Route}  from 'react-router-dom'
import './App.css';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={BoardPage}>

    </Route>
    <Route exact path="/login" component={LoginPage}>

    </Route>
    </BrowserRouter>
  );
}

export default App;
