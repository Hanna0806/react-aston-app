import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from './constants/routes';
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { MoviePage } from "./pages/MoviePage/MoviePage";

const Auth = lazy(() => import("./pages/Auth/Auth"));
const Registration = lazy(() => import("./pages/Registration/Registration"));

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
            <Route
              path={ROUTES.MOVIEPAGE} 
              element={<MoviePage 
                movieId={1396} name="Breaking Bad" 
                />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
