import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { toast } from "react-toastify";

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function completeLogin() {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login(user));
          toast.success("Login successful!");
          navigate("/"); // Redirect to home after login
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.log("Error fetching user:", error);
        toast.error("Google login failed. Please try again.");
        navigate("/login"); // Redirect to login if it fails
      }
    }

    completeLogin();
  }, [navigate, dispatch]);
  return <div>Logging you in...</div>;
};

export default AuthCallback;
