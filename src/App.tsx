import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import { ROUTES } from './constants/constants';
import { AuthRoutes } from './components/AuthRoutes/AuthRoutes';

const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={"Home page"} />
          <Route element={<AuthRoutes />}>
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
