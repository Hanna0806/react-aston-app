import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { ROUTES } from './constants/routes';
import Header from './components/Header/Header';

const Auth = lazy(() => import('./pages/Auth/Auth'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Search = lazy(() => import('./pages/Search/Search'));

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={"Home page"} />
            <Route path={ROUTES.AUTH} element={<Auth />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.SEARCH} element={<Search/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
