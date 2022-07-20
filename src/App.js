import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
          </Routes>

      </Navbar>



    </div>
  );
}

export default App;
