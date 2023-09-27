import { Routes, Route } from "react-router-dom";
import { NavBarComponent } from "./components/NavBarComponent";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
