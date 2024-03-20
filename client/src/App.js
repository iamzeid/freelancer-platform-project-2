import Home from "./Pages/home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
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
import Dashboard from "./Components/dashboard";


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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route exact path="/register" element={<Register />} />

          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/dashboard"
            element={user ? <Navigate to="/dashboard" /> : <Dashboard />}
          />

          <Route
            exact
            path="/logout"
            element={!user ? <Logout /> : <Navigate to="/login" />}
          />

          {/* <Route exact path='/orders' element={<Orders></Orders>} /> */}
          <Route exact path="/success" element={<Success />} />
          {/* <Route exact path='/pay' element={<Pay />} /> */}
          <Route exact path="/order" element={<OrderButton />} />
          <Route path="/gig/:id" element={<ViewGig />} />
          <Route path="/gig/create" element={<CreateGig />} />
          <Route path="/success" component={Success} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/dashboard/users" element={<UserDash />} />
          <Route path="/dashboard/gigs" element={<GigDash />} />
          <Route path="/dashboard/orders" element={<OrderDash />} />

          <Route path='/topprofile/:freelancerId' element={<TopProfile/>}></Route>

          {/* 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
