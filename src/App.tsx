
import BoardPage from './components/BoardPage';
import {BrowserRouter , Route}  from 'react-router-dom'
import './App.css';
import { LoginPage } from './components/LoginPage';

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
