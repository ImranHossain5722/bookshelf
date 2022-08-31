import React, { Component ,Suspense, lazy  } from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";
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

import AllPublishers from "./components/Dashboard/AllPublishers/AllPublishers";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import Myorder from "./components/Dashboard/Myorder/Myorder";
import Myprofile from "./components/Dashboard/Myprofile/Myprofile";
import OrderHistory from "./components/Dashboard/OrderHistory/OrderHistory";
import AuthorOrPublisher from "./pages/Forms/AuthorOrPublisher";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import AllBooks from "./components/Books/AllBooks";
import NavDashboard from "./components/NavDashboard/NavDashboard";
import auth from "./firebase.init";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

import NotFound from "./pages/NotFound/NotFound";
import Products_details from "./pages/Products_details/Products_details";
import axios from "axios";
import Wishlist from "./pages/wishlist/Wishlist";

import Faq from "./pages/Faq/Faq";
import PrivecyPolicy from "./pages/Privecy_policy/PrivecyPolicy";
import TermsCondition from "./pages/TermsCondition/TermsCondition";
import ViewBySingleCategory from "./components/FirstCategoryBooks/ViewBySingleCategory";
// import AboutUs from "./pages/AboutUs/AboutUs";
import { newUser } from "./components/Redux/actions/bookActions";
import { useDispatch } from "react-redux";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import MyWishlist from "./components/Dashboard/MyWishlist/MyWishlist";
import AddStuff from "./components/Dashboard/AddStuff/AddStuff";
import RequestBook from "./components/Dashboard/RequestBook/RequestBook";
import Payment from "./components/Dashboard/Payments/Payment";
import Chat from "./pages/Chat/Chat";
import AllProducts from "./components/Dashboard/AllProducts/AllProducts";
import ReadersHome from "./components/ReadersHomePage/ReadersHome";
import ProductReleaseLandingPage from "./components/ProductReleaseLandingPage/ProductReleaseLandingPage";
import OrderDelivery from "./components/Dashboard/OrderDelivery/OrderDelivery";
import Orders from "./components/Dashboard/OrderDelivery/Orders";
import DeliveredOrder from "./components/Dashboard/OrderDelivery/DeliveredOrder";
import PickedOrder from "./components/Dashboard/OrderDelivery/PickedOrder";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import ChatPopup from "./components/ChatPopup/ChatPopup";
import UpdateProduct from "./components/Dashboard/AllProducts/UpdateProduct";
import MyProducts from "./components/Dashboard/MyProducts/MyProducts";
import CurrentOrders from "./components/Dashboard/OrderHistory/CurrentOrders";
import OrdersPicked from "./components/Dashboard/OrderHistory/OrdersPicked";
import OrdersDelivered from "./components/Dashboard/OrderHistory/OrdersDelivered";
import AddProductReview from "./components/Dashboard/AddProductReview/AddProductReview";
import BestSellingBooks from "./components/BestSellingBooks/BestSellingBooks";
import ThankYou from "./components/ThankYou/ThankYou";
import TrackOrders from "./components/Dashboard/Myorder/TrackOrders";
import ProductToReview from "./components/Dashboard/AddProductReview/ProductToReview";
import BestOfferPage from "./pages/BestOfferPage/BestOfferPage";
import PopularWritersBooksPage from "./pages/PopularWritersBooksPage/PopularWritersBooksPage";
import Loading from "./components/Loading/Loading";
// import Home from "./pages/Home/Home";

//
const Home = lazy (()=> import ("./pages/Home/Home"))
const AboutUs = lazy (()=> import ("./pages/AboutUs/AboutUs"))
const Contact = lazy (()=> import ("./pages/Contact/Contact"))
const AllBooks = lazy (()=> import ("./components/Books/AllBooks"))
const BestSellingBooksPage = lazy (()=> import ("./pages/BestSellingBooksPage/BestSellingBooksPage"))
const Dashboard = lazy (()=> import ("./components/Dashboard/Dashboard"))
const AllOrders = lazy (()=> import ("./components/Dashboard/AllOrders/AllOrders"))

// initialize aos
AOS.init();

function App() {
  const { pathname } = useLocation();
  const [dash, setdash] = useState("");
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const userUid = user?.uid;
  useEffect(() => {
    if (userUid) {
      fetch(`https://book-shelf-webapp.herokuapp.com/get-user?uid=${userUid}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(newUser(data[0]));
        });
    }
  }, [user, userUid]);

  useEffect(() => {
    if (pathname.includes("/dashboard")) {
      setdash("in dash");
    } else {
      setdash("");
    }
  }, [pathname]);

  // const user = useSelector((state) => state?.newUser?.user)   --> to grap user data from everypage

  return (
    <div className="App">
      {dash ? (
        <NavDashboard>
         
          <Routes>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Suspense fallback={<Loading></Loading>}><Dashboard /></Suspense> 
                </RequireAuth>
              }
            >
              <Route index element={<Myprofile />} />
              <Route path="myorder" element={<Myorder />} />
              <Route path="mywishlist" element={<MyWishlist />} />
              <Route path="addstuff" element={<AddStuff />} />
              <Route path="allproducts" element={<AllProducts />} />
              <Route path="requestbook" element={<RequestBook />} />
              <Route path="addreview" element={<Addreview />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="myproducts" element={<MyProducts />} />
              <Route path="updateproduct/:bookid" element={<UpdateProduct />} />
              <Route
                path="addproductreviews/:bookid"
                element={<AddProductReview />}
              />
              <Route path="addproductreviews" element={<ProductToReview />} />
              <Route path="trackorder/:bookid" element={<TrackOrders />} />
              <Route path="allpublisher" element={<AllPublishers />} />
              <Route path="allusers" element={<AllUsers />} />
              <Route path="allorders" element={ <Suspense fallback={<Loading></Loading>}><AllOrders /></Suspense>} />
              <Route path="allauthor" element={<AllAuthors />} />
              <Route path="orderhistory" element={<OrderHistory />}>
                <Route path="orders" element={<CurrentOrders />} />
                <Route path="deliveredorders" element={<DeliveredOrder />} />
                <Route path="pickedorders" element={<PickedOrder />} />
              </Route>

              <Route path="orderdelivery" element={<OrderDelivery />}>
                <Route path="orders" element={<Orders />} />
                <Route path="deliveredorders" element={<OrdersDelivered />} />
                <Route path="pickedorders" element={<OrdersPicked />} />
              </Route>
            </Route>
          </Routes>
      
        </NavDashboard>
      ) : (
        <NavBar>
          
         
          <Routes >
           
            <Route path="/" element={ <Suspense fallback={<Loading></Loading>}><Home /></Suspense>} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/trackorder" element={<TrackOrder />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            {/* thank_you */}
            <Route path="/thank_you" element={<ThankYou />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/selectedBook/:_id"
              element={<Products_details />}
            ></Route>
            <Route path="/became" element={<AuthorOrPublisher />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/books" element={ <Suspense fallback={<Loading></Loading>}> <AllBooks /></Suspense>}></Route>
            <Route path="/bestSelling" element={<BestSellingBooks />} />

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
              path="/chat"
              element={
                <RequireAuth>
                  <Chat />
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
            <Route
              path="/categoryView"
              element={<ViewBySingleCategory />}
            ></Route>
            <Route path="/about" element={ <Suspense fallback={<Loading></Loading>}> <AboutUs /></Suspense>}></Route>
            <Route path="/contact" element={<Suspense fallback={<Loading></Loading>}><Contact /></Suspense> }></Route>
            <Route path="/privecy_policy" element={<PrivecyPolicy />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/comingsoon" element={<CommingSoon />}></Route>
            <Route path="/termsCondition" element={<TermsCondition />}></Route>
            <Route
              path="/readershome"
              element={
                <RequireAuth>
                  <ReadersHome />
                </RequireAuth>
              }
            ></Route>

            <Route
              path="/productReleaseLandingpage"
              element={<ProductReleaseLandingPage />}
            ></Route>
            <Route path="/chatpopup" element={<ChatPopup />}></Route>
            <Route
              path="/BestSellingBooksPage"
              element={ <Suspense fallback={<Loading></Loading>}><BestSellingBooksPage /></Suspense>}
            ></Route>
            <Route
              path="/BestOffers"
              element={<BestOfferPage></BestOfferPage>}
            ></Route>
            <Route
              path="/Poplerwriters"
              element={<PopularWritersBooksPage></PopularWritersBooksPage>}
            ></Route>
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
