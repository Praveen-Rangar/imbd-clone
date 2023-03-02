import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/TypeScript/Navbar/oldNavbar/Navbar";
import Home from "./components/TypeScript/Pages/Home/Home";
import MovieList from "./components/TypeScript/Pages/MovieList/MovieList";
import MovieDetails from "./components/TypeScript/Pages/MovieDetail/MovieDetails";
import SerachBar from "./components/TypeScript/SearchBar/SearchBar";
import RealNavbar from "./components/TypeScript/Navbar/RealNavbar/RealNavbar";
import ResponsiveDrawer from "./components/TypeScript/Navbar/RealNavbar/LeftDrawer";
import { useState } from "react";
import LeftDrawer from "./components/TypeScript/Navbar/RealNavbar/LeftDrawer";
import MobileSearchBar from "./components/TypeScript/Navbar/RealNavbar/MobileSearchBar";

function App() {
  const [state, setstate] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  console.log("", state);

  return (
    <div className="App">
      <Router>
        <RealNavbar
          setstate={setstate}
          setSearchMenu={setSearchMenu}
          searchMenu={searchMenu}
        />
        <LeftDrawer setstate={setstate} state={state} />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h2>error</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
