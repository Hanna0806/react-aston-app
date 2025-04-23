import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { ROUTES } from "./constants/routes";
import { AuthRoutes } from "./components/AuthRoutes/AuthRoutes";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { FavoritePage } from "./pages/FavoritesPage/FavoritesPage";

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Search = lazy(() => import("./pages/Search/Search"));

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
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.MOVIEPAGE} element={<MoviePage />} />
          <Route
            path={ROUTES.FAVORITES}
            element={
              <ProtectedRoute>
                <FavoritePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
