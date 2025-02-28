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
          navigate("/");
        }
      } catch (error) {
        console.error("OAuth Callback Error:", error);
        navigate("/login");
      }
    }

    completeLogin();
  }, [navigate]);
  return <div>Logging you in...</div>;
};

export default AuthCallback;
