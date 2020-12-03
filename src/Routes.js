import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Main from 'pages/Main'

const Routes = props => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/main' exact component={Main} />
    </Switch>
  )
}

export default Routes
