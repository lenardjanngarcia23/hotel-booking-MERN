
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './booking/Home'
import LoginPage from './auth/Login'
import RegisterPage from './auth/Register'

import TopNav from './components/TopNav'

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
