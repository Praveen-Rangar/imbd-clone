import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./Pages/MovieDetail/MovieDetails";
import SerachBar from "./components/SearchBar/SearchBar";
import RealNavbar from "./components/Navbar/RealNavbar/RealNavbar";
import ResponsiveDrawer from "./components/Navbar/RealNavbar/LeftDrawer";
import { useState } from "react";
import LeftDrawer from "./components/Navbar/RealNavbar/LeftDrawer";
import MobileSearchBar from "./components/Navbar/RealNavbar/MobileSearchBar";

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
