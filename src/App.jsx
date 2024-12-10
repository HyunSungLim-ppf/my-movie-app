import React from "react";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { GenreBtnList } from "./components/GenreBtnList/GenreBtnList";
import { Provider } from "react-redux";
import store from "./store";
import { MovieList } from "./components/MovieList/MovieList";
import { AsideBtn } from "./components/AsideBtn/AsideBtn";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import About from "./components/About/About";
import Info from "./components/Info/Info";
import News from "./components/News/News";

export default function App() {
  return (
    <div id="container">
      <Provider store={store}>
        <BrowserRouter>
          {/* Home */}
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/genres" element={<GenreBtnList />} />
            <Route path="/movieList/:genre" element={<MovieList />} />
            <Route path="/movieInfo/:movie_id" element={<MovieInfo/>}/>
          </Routes>
        </BrowserRouter>
      <AsideBtn/>
      </Provider>
    </div>
  );
}
