import { lazy } from 'react'
import { createSuspendedComponent } from 'utils/createSuspendedComponent'
import Home from './Home'
const LazyMain = lazy(() => import('./Main'))
const LazyLogin = lazy(() => import('./Login'))
const LazyRegister = lazy(() => import('./Register'))
const LazyEditProfile = lazy(() => import('./EditProfile'))
const LazyEditEmergency = lazy(() => import('./EditEmergency'))

const Main = createSuspendedComponent(LazyMain)
const Login = createSuspendedComponent(LazyLogin)
const Register = createSuspendedComponent(LazyRegister)
const EditProfile = createSuspendedComponent(LazyEditProfile)
const EditEmergency = createSuspendedComponent(LazyEditEmergency)

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
