import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/home/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Success from "./Components/Success";
import OrderButton from "./Components/OrderButton";
import ViewGig from "./Components/ViewGig";
import EditGig from "./Components/EditGig";
import CreateGig from "./Components/CreateGig";
import Browse from "./Components/Browse";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import UserDash from "./Components/UserDash";
import GigDash from "./Components/GigsDash";
import OrderDash from "./Components/OrdersDash";
import TopProfile from "./Components/TopProfile";
import VerificationPage from "./Components/VerificationPage";
import RequireVerification from "./Components/HOC/RequireVerification";
import Verifying from "./Components/Verifying";
import EmailCheckPage from "./Components/EmailCheckPage.";
const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8800/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home></Home>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={!user ? <Logout /> : <Navigate to="/login" />} />
          <Route path="/success" element={<Success />} />
          <Route path="/order" element={<OrderButton />} />
          <Route path="/gig/:id" element={<ViewGig />} />
          <Route path="/gig/create" element={<CreateGig />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/dashboard/users" element={<UserDash />} />
          <Route path="/dashboard/gigs" element={<GigDash />} />
          <Route path="/dashboard/orders" element={<OrderDash />} />
          <Route path='/topprofile/:freelancerId' element={<TopProfile />}></Route>
          <Route path="/verification" element={<EmailCheckPage />} />
          <Route
            path="/"
            element={
              user ? (
                <RequireVerification>
                  <Home user={user} />
                </RequireVerification>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
