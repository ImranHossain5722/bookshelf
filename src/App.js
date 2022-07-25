import { Route, Routes } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/home/Home";


// initialize aos
AOS.init();

function App() {
  return (
    <div className="App bg-base-100">
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
