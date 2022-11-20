import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAppSelector } from "hooks/store";
//css
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/scss/modal-video.scss";
import "./scss/main.scss";

// template
import HomeTemplate from "templates/HomeTemplate";

//component
import ProtectedRoute from "routes/ProtectedRoute";
import Loading from "components/Loading/Loading";
import TriggerLoadingLazy from "components/TriggerLoadingLazy/TriggerLoadingLazy";

// pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Login = lazy(() => import("./pages/Login/Login"));

const Register = lazy(() => import("./pages/Register/Register"));
const BookingHistory = lazy(() => import("./pages/BookingHistory/BookingHistory"));
const BookingStickets = lazy(() => import("./pages/BookingStickets/BookingStickets"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const FilmDetail = lazy(() => import("./pages/FilmDetail/FilmDetail"));

function App() {
  const { user: isAuth } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Loading />
      <Suspense fallback={<TriggerLoadingLazy />}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
            <Route
              path="booking-history"
              element={
                <ProtectedRoute isAuth={!!isAuth}>
                  <BookingHistory />
                </ProtectedRoute>
              }
            />
            <Route path="/detail/:maPhim" element={<FilmDetail />} />
          </Route>
          <Route
            path="/datve/:maLichChieu"
            element={
              <ProtectedRoute isAuth={!!isAuth}>
                <BookingStickets />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={isAuth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={isAuth ? <Navigate to="/" /> : <Register />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
