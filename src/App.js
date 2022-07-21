import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar"

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}>

          </Route>
        </Routes>
      </NavBar>

      <Footer></Footer>
    </div>
  );
}

export default App;
