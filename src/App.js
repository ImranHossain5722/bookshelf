import { Route, Routes } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/Navbar/NavBar";
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

// initialize aos
AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </NavBar>

      <Footer></Footer>
    </div>
  );
}

export default App;
