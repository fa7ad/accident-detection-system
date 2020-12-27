import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Main from 'pages/Main'
import Edit from 'pages/Edit'
import Login from 'pages/Login'
import Register from 'pages/Register'

const Routes = props => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/main' exact component={Main} />
      <Route path='/edit' component={Edit} />
    </Switch>
  )
}

export default Routes
