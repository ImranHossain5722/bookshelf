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
import Login from "./pages/Authentication/LoginAndSignup/Login";
import SignUp from "./pages/Authentication/LoginAndSignup/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


// initialize aos
AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>

        <Footer />
      </NavBar>


      <ToastContainer />
    </div>
  );
}

export default App;
