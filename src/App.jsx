import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthCallback, Header } from "./components";
import AllPosts from "./pages/AllPosts";
import AddPost from "./pages/AddPost";
import UserProfile from "./pages/UserProfile";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Post from "./pages/Post";
import MyPosts from "./pages/MyPosts";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch, navigate]);

  const hideHeaderRoutes = [
    "/login",
    "/signup",
    "/recover-password",
    "/reset-password",
  ];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}

      <ToastContainer className="z-50" position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<PublicRoute element={<SignupPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute element={<LoginPage />} />}
        />
        <Route
          path="/all-posts"
          element={<ProtectedRoute element={<AllPosts />} />}
        />
        <Route
          path="/add-post"
          element={<ProtectedRoute element={<AddPost />} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoute element={<Contact />} />}
        />
        <Route
          path="/:userId"
          element={<ProtectedRoute element={<UserProfile />} />}
        />
        <Route
          path="/posts/:id"
          element={<ProtectedRoute element={<Post />} />}
        />
        <Route
          path="/my-posts"
          element={<ProtectedRoute element={<MyPosts />} />}
        />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/recover-password"
          element={<PublicRoute element={<RecoverPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<PublicRoute element={<ResetPassword />} />}
        />
      </Routes>

      {shouldShowHeader && <Footer />}
    </>
  );
};

export default App;
