import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar" 

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
     
     <NavBar>
       <Routes>
         <Route path="/" element={<Home></Home>}> </Route>
       </Routes>
     </NavBar>


    </div>
  );
}

export default App;
