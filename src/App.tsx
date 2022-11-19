import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

//css
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/scss/modal-video.scss";
import "./scss/main.scss";


// template
import HomeTemplate from "templates/HomeTemplate";

// pages
import HomePage from "pages/HomePage/HomePage";
import FilmDetail from "pages/FilmDetail/FilmDetail";

//component
import ProtectedRoute from "routes/ProtectedRoute";
import Loading from "components/Loading/Loading";
import PageNotFound from "pages/PageNotFound/PageNotFound";

const BookingStickets = lazy(
  () => import("pages/BookingStickets/BookingStickets")
);
const Login = lazy(() => import("pages/Login/Login"));
const Register = lazy(() => import("pages/Register/Register"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
            <Route path="/detail/:maPhim" element={<FilmDetail />} />
          </Route>
          <Route
            path="/datve/:maLichChieu"
            element={
              <ProtectedRoute>
                <BookingStickets />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
