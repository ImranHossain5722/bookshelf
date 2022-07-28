import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/Navbar/NavBar";
import Login from "./pages/Authentication/LoginAndSignup/Login";
import SignUp from "./pages/Authentication/LoginAndSignup/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import AddBook from "./pages/Forms/AddBook";
import AddCategory from "./pages/Forms/AddCategory";
import AddAuthor from "./pages/Forms/AddAuthor";
import AddPublisher from "./pages/Forms/AddPublisher";
import Home from "./pages/Home/Home";
import AuthorOrPublisher from "./pages/Forms/AuthorOrPublisher";
import Myprofile from "./components/Dashboard/Myprofile/Myprofile";
import Myorder from "./components/Dashboard/Myorder/Myorder";
import Addreview from "./components/Dashboard/Addreview/Addreview";
import Dashboard from "./components/Dashboard/Dashboard";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import AllPublishers from "./components/Dashboard/AllPublishers/AllPublishers";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import AllOrders from "./components/Dashboard/AllOrders/AllOrders";
import AllAuthors from "./components/Dashboard/AllAuthors/AllAuthors";
import OrderHistory from "./components/Dashboard/OrderHistory/OrderHistory";
<<<<<<< HEAD
=======
import Home from "./pages/Home/Home";
import BestSellingBooks from "./components/BestOffersBooks/BestOffersBooks";
import PopularWritersBooks from "./components/PopularWritersBooks/PopularWritersBooks";
import BestOffersBooks from "./components/BestOffersBooks/BestOffersBooks";
import { useEffect, useState } from "react";
import NavDashboard from "./components/NavDashboard/NavDashboard";
>>>>>>> be50ed9406905f8d6a83e7b7e226cc2a1e5a510c


// initialize aos
AOS.init();

function App() {
<<<<<<< HEAD
=======
  const { pathname } = useLocation()
  const [dash, setdash] = useState('')

  useEffect(() => {
    if (pathname.includes('/dashboard')) {
      setdash("in dash")
    }
    else {
      setdash('')
    }
  }, [pathname])
>>>>>>> be50ed9406905f8d6a83e7b7e226cc2a1e5a510c



  return (
    <div className="App">
      {dash ? <NavDashboard >
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}></Route>
=======
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route index element={<Myprofile />} />
            <Route path="myorder" element={<Myorder />} />
            <Route path="addreview" element={<Addreview />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="allpublisher" element={<AllPublishers />} />
            <Route path="allusers" element={<AllUsers />} />
            <Route path="allorders" element={<AllOrders />} />
            <Route path="allauthor" element={<AllAuthors />} />
            <Route path="orderhistory" element={<OrderHistory />} />


          </Route>
        </Routes>
      </NavDashboard> : <NavBar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<BestSellingBooks />} />
            <Route path="/popular-writers" element={<PopularWritersBooks />} />
            <Route path="/best-offers" element={<BestOffersBooks />} />
          </Route>
>>>>>>> be50ed9406905f8d6a83e7b7e226cc2a1e5a510c
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/became" element={<AuthorOrPublisher />}></Route>
          <Route path="/addbook" element={<RequireAuth><AddBook /></RequireAuth>}></Route>
          <Route path="/addcategory" element={<RequireAuth><AddCategory /></RequireAuth>}></Route>
          <Route path="/addauthor" element={<RequireAuth><AddAuthor /></RequireAuth>}></Route>
          <Route path="/addpublisher" element={<RequireAuth><AddPublisher /></RequireAuth>}></Route>
          {/* Dashboard routes */}
<<<<<<< HEAD
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route index element={<Myprofile />} />
            <Route path="myorder" element={<Myorder />} />
            <Route path="addreview" element={<Addreview />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="allpublisher" element={<AllPublishers />} />
            <Route path="allusers" element={<AllUsers />} />
            <Route path="allorders" element={<AllOrders />} />
            <Route path="allauthor" element={<AllAuthors />} />
            <Route path="orderhistory" element={<OrderHistory />} />


          </Route>
=======

>>>>>>> be50ed9406905f8d6a83e7b7e226cc2a1e5a510c
          <Route
            path="/addbook"
            element={
              <RequireAuth>
                <AddBook />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addcategory"
            element={
              <RequireAuth>
                <AddCategory />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addauthor"
            element={
              <RequireAuth>
                <AddAuthor />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addpublisher"
            element={
              <RequireAuth>
                <AddPublisher />
              </RequireAuth>
            }
          ></Route>

        </Routes>

        <Footer />
      </NavBar>}

      <ToastContainer />
    </div>
  );
}

export default App;
