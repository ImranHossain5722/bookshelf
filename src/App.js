import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import SampleCard from "./components/SampleCard/SampleCard";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}>

          </Route>
        </Routes>
        
        <SampleCard />

      </NavBar>

      <Footer></Footer>
          
   
      
    </div>
  );
}

export default App;
