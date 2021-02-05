import { Route, Switch } from 'react-router-dom'
import createPersistedState from 'use-persisted-state'
import { makeStyles, Typography, Link } from '@material-ui/core'

import APP_ROUTES from 'pages'
import NavBar from 'components/Navbar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '1 1 0',
    flexDirection: 'column'
  },
  footer: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
    padding: theme.spacing(2)
  }
}))

const useGlobalState = createPersistedState('adrs__global__mui::v1', localStorage)

const App = props => {
  const classes = useStyles()

  const [globalData, setGlobalData] = useGlobalState({
    auth: false,
    title: 'ADRS'
  })

  return (
    <div className={classes.root}>
      <NavBar auth={globalData.auth} title={globalData.title} globalData={globalData} setGlobalData={setGlobalData} />
      <div className='empty'>&nbsp;</div>
      <Switch>
        {APP_ROUTES.map(({ component, fallback, isPrivate, ...route }) => {
          const Component = isPrivate ? (globalData.auth ? component : fallback) : component
          return (
            <Route {...route} key={route.key}>
              {props => <Component {...props} globalData={globalData} setGlobalData={setGlobalData} />}
            </Route>
          )
        })}
      </Switch>
      <Typography variant='body2' color='textSecondary' align='center' className={classes.footer}>
        Copyright ©{' ' + new Date().getFullYear() + ' '}
        <Link color='inherit' href='https://github.com/fa7ad'>
          @fa7ad
        </Link>
        . All rights reserved.
      </Typography>
    </div>
  )
}

export default App
