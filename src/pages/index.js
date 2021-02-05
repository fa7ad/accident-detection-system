import Home from './Home'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import EditProfile from './EditProfile'
import EditEmergency from './EditEmergency'

const APP_ROUTES = [
  {
    path: '/',
    exact: true,
    component: Home,
    key: 'home'
  },
  {
    path: '/login',
    component: Login,
    key: 'login'
  },
  {
    path: '/register',
    component: Register,
    key: 'register'
  },
  {
    path: '/main',
    component: Main,
    key: 'main',
    isPrivate: true,
    fallback: Home
  },
  {
    path: '/edit-profile',
    component: EditProfile,
    key: 'edit-profile',
    isPrivate: true,
    fallback: Home
  },
  {
    path: '/edit-emergency',
    component: EditEmergency,
    key: 'edit-emergency',
    isPrivate: true,
    fallback: Home
  }
]

export default APP_ROUTES
