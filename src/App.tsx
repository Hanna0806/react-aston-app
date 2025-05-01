import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ROUTES } from "./constants/routes";
import { AuthRoutes } from "./components/AuthRoutes/AuthRoutes";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Loader } from "./components/Loader/Loader";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { FavoritePage } from "./pages/FavoritesPage/FavoritesPage";

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));
const SearchResult = lazy(() => import("./pages/SearchResult/SearchResult"));
const History = lazy(() => import("./pages/History/History"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
          <Route
            path={ROUTES.SEARCH}
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.SEARCH_RESULT}
            element={
              <ProtectedRoute>
                <SearchResult />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.HISTORY}
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.FAVORITES}
            element={
              <ProtectedRoute>
                <FavoritePage />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.MOVIEPAGE} element={<MoviePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;