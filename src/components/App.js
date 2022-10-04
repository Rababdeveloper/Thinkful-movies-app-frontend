import axios from "axios";
import React from "react";
import { AxiosProvider } from "react-axios";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import "../index.css";
import Layout from "./Layout";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import Theaters from "../pages/Theaters";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

function App() {
  return (
    <AxiosProvider instance={axiosInstance}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetail />} />
            <Route path="theaters" element={<Theaters />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AxiosProvider>
  );
}

export default App;
