
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './booking/Home'
import LoginPage from './auth/Login'
import RegisterPage from './auth/Register'

import TopNav from './components/TopNav'

// toasatify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position='top-center' />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
