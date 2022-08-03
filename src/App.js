import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
// import SampleCard from "./components/SampleCard/SampleCard";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Navbar/NavBar";
import Login from "./pages/Authentication/LoginAndSignup/Login";
import SignUp from "./pages/Authentication/LoginAndSignup/SignUp";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import AddAuthor from "./pages/Forms/AddAuthor";
import AddBook from "./pages/Forms/AddBook";
import AddCategory from "./pages/Forms/AddCategory";
import AddPublisher from "./pages/Forms/AddPublisher";

import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import Addreview from "./components/Dashboard/Addreview/Addreview";
import AllAuthors from "./components/Dashboard/AllAuthors/AllAuthors";
import AllOrders from "./components/Dashboard/AllOrders/AllOrders";
import AllPublishers from "./components/Dashboard/AllPublishers/AllPublishers";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import Dashboard from "./components/Dashboard/Dashboard";
import Myorder from "./components/Dashboard/Myorder/Myorder";
import Myprofile from "./components/Dashboard/Myprofile/Myprofile";
import OrderHistory from "./components/Dashboard/OrderHistory/OrderHistory";
import AuthorOrPublisher from "./pages/Forms/AuthorOrPublisher";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import BestOffersBooks from "./components/BestOffersBooks/BestOffersBooks";
import AllBooks from "./components/Books/AllBooks";
import NavDashboard from "./components/NavDashboard/NavDashboard";
import PopularWritersBooks from "./components/PopularWritersBooks/PopularWritersBooks";
import auth from "./firebase.init";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Products_details from "./pages/Products_details/Products_details";

import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import PrivecyPolicy from "./pages/Privecy_policy/PrivecyPolicy";
import TermsCondition from "./pages/TermsCondition/TermsCondition";
import AboutUs from "./pages/AboutUs/AboutUs";

// initialize aos
AOS.init();

function App() {
  const { pathname } = useLocation();
  const [dash, setdash] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    const userEmail = {
      email: "sharif@gmail.com",
    };
    fetch("https://book-shelf-webapp.herokuapp.com/get-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => console.log(data[0]));
  }, [user?.email]);

  useEffect(() => {
    if (pathname.includes("/dashboard")) {
      setdash("in dash");
    } else {
      setdash("");
    }
  }, [pathname]);

  return (
    <div className="App">
      {dash ? (
        <NavDashboard>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
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
        </NavDashboard>
      ) : (
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                path="/popular-writers"
                element={<PopularWritersBooks />}
              />
              <Route path="/best-offers" element={<BestOffersBooks />} />
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/selectedBook/:_id"
              element={<Products_details />}
            ></Route>
            <Route path="/became" element={<AuthorOrPublisher />}></Route>
            <Route path="/books" element={<AllBooks />}></Route>
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
            {/* Dashboard routes */}
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

            <Route
              path="/productsdetails"
              element={
                <RequireAuth>
                  <Products_details />
                </RequireAuth>
              }
            ></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/privecy_policy" element={<PrivecyPolicy />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/termsCondition" element={<TermsCondition />}></Route>
            <Route path="*" element={<NotFound></NotFound>}>
              {" "}
            </Route>
          </Routes>

          <Footer />
        </NavBar>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
