import { Route, Routes } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css"; 
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import Login from "./pages/Authentication/LoginAndSignup/Login";
import SignUp from "./pages/Authentication/LoginAndSignup/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import AddBook from "./pages/Forms/AddBook";
import AddCategory from "./pages/Forms/AddCategory";
import AddAuthor from "./pages/Forms/AddAuthor";
import AddPublisher from "./pages/Forms/AddPublisher";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";


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
          <Route path="/addbook" element={<RequireAuth><AddBook /></RequireAuth>}></Route>
          <Route path="/addcategory" element={<RequireAuth><AddCategory /></RequireAuth>}></Route>
          <Route path="/addauthor" element={<RequireAuth><AddAuthor /></RequireAuth>}></Route>
          <Route path="/addpublisher" element={<RequireAuth><AddPublisher /></RequireAuth>}></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} > </Route>
        </Routes>

        <Footer />
      </NavBar>


      <ToastContainer />
    </div>
  );
}

export default App;
