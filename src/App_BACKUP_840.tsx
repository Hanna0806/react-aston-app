import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ROUTES } from "./constants/routes";
import { AuthRoutes } from "./components/AuthRoutes/AuthRoutes";
<<<<<<< HEAD
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Loader } from "./components/Loader/Loader";

import MoviesList from "./components/CardsList/CardsList";

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));
const History = lazy(() => import("./pages/History/History"));
=======
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { FavoritePage } from "./pages/FavoritesPage/FavoritesPage";

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Search = lazy(() => import("./pages/Search/Search"));
>>>>>>> add_favourites

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route element={<AuthRoutes />}>
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          </Route>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path={ROUTES.SEARCH} element={<Search />} />
=======
          <Route path={ROUTES.SEARCH} element={<><Search/> <MoviesList /></>}/>
>>>>>>> main
          <Route
            path={ROUTES.MOVIEPAGE}
            element={<MoviePage movieId={1396} name="Breaking Bad" />}
          />
          <Route path={ROUTES.HISTORY} element={<History />} />
=======
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
>>>>>>> add_favourites
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;