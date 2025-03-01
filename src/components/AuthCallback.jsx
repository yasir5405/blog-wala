import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function completeLogin() {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login(user));
          navigate("/"); // Redirect to home after login
        }
      } catch (error) {
        console.log("Error fetching user:", error);
        navigate("/login"); // Redirect to login if it fails
      }
    }

    completeLogin();
  }, [navigate, dispatch]);
  return <div>Logging you in...</div>;
};

export default AuthCallback;
