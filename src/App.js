import { Route, Routes } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
// import NavBar2 from "./components/Navbar/NavBar2";
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";


// initialize aos
AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      <Footer/>
      </NavBar>
    </div>
  );
}

export default App;
