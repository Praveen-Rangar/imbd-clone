import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./Pages/MovieDetail/MovieDetails";
import SerachBar from "./components/SearchBar/SearchBar";
import RealNavbar from "./components/Navbar/RealNavbar/RealNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <RealNavbar />
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
