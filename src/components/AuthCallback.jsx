import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function completeLogin() {
      try {
        const user = await authService.account.get();
        if (user) {
          window.location.replace("/");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("OAuth Callback Error:", error);
        window.location.replace("/login");
      }
    }

    completeLogin();
  }, [navigate]);
  return <div>Logging you in...</div>;
};

export default AuthCallback;
