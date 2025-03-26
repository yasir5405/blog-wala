import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const login = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        toast.success("Login successful!");
      }
    } catch (error) {
      setError(error.message);
      console.log("Error while logging in :: ", error);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // New Login Form
    <div className="w-full h-screen px-2 md:px-0 lg:px-0 flex items-center justify-center bg-zinc-950 text-white">
      {/* Login DIv */}
      <div className="w-[380px] min-h-[475px] border border-gray-800 rounded-xl p-6">
        {/* LOGIN TEXT */}
        <div className="w-full py-2 flex flex-col">
          <h1 className="text-[28px] md:text-[30px] lg:text-[30px] font-semibold">
            Login
          </h1>

          <p className="text-gray-400 text-[14px] md:text-[16px] lg:text-[16px] ">
            Enter your credentials to login
          </p>

          <button
            className="border mt-[15px] border-gray-800 flex w-full py-2 items-center justify-center gap-2 rounded-xl font-semibold text-[18px] hover:bg-zinc-900 transition-all delay-75"
            onClick={() => authService.loginWithGoogle()}
          >
            <FaGoogle className="text-[22px]" /> Google
          </button>
        </div>

        {/* OR Line */}
        <div className="w-full py-2 flex items-center gap-2">
          <div className="flex-grow h-0 border border-gray-800"></div>
          <p className="text-gray-400 text-[14px]">OR CONTINUE WITH</p>
          <div className="flex-grow h-0 border border-gray-800"></div>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(login)}
          action=""
          className="w-full py-3 flex flex-col gap-3"
        >
          <Input
            label="Email"
            type="email"
            className=""
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <Input
            label="Password"
            type="password"
            className=""
            placeholder="Password"
            {...register("password", { required: true, min: 8 })}
          />

          <div className="w-full flex items-center justify-between gap-[2px]">
            <div className="flex h-full items-center gap-1">
              <input required type="checkbox" name="" id="" />
              <label className="font-semibold text-[12px]">
                I agree to the{" "}
                <a href="" className="underline">
                  terms & policy
                </a>
              </label>
            </div>

            <Link
              to="/recover-password"
              className="font-semibold text-[12px] underline"
            >
              Forgot password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-white py-[5px] font-medium text-black text-[17px] rounded-lg transition-all ease-linear duration-200 hover:bg-zinc-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <h1 className="font-medium text-[14px] text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-zinc-300 underline" to="/signup">
            Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LoginForm;
