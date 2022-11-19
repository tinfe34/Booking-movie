import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

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

// pages
import HomePage from "pages/HomePage/HomePage";
import FilmDetail from "pages/FilmDetail/FilmDetail";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import Register from "pages/Register/Register";
import BookingStickets from "pages/BookingStickets/BookingStickets";
import Login from "pages/Login/Login";




function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Loading />
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
