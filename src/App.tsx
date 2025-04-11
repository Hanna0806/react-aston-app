import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss'
import Header from './components/Header/Header'

const Auth = lazy(() => import('./pages/Auth/Auth'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={"Home page"} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Suspense>
      </Router>
    </div>

  )
}

export default App
