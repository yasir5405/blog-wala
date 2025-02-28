import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useEffect, useState } from "react";

const SignUpForm = () => {
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

  const createUser = async (data) => {
    setError("");
    setLoading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        // console.log("Signup Inputs:", { data });
      }
    } catch (error) {
      setError(error.message);
      console.log("Error while creating account :: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[400px] h-screen flex flex-col justify-around relative">
      <h1 className="font-semibold text-[34px] mt-[30px]">Get Started Now</h1>

      {/* Form Div */}
      <div className="w-full h-[390px]">
        <form
          onSubmit={handleSubmit(createUser)}
          action=""
          className="w-full h-full flex flex-col gap-[30px]"
        >
          <Input
            label="Name"
            type="text"
            className=""
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />

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

          <div className="w-full flex gap-[5px]">
            <input required type="checkbox" name="" id="" />
            <label className="font-semibold text-[12px]">
              I agree to the{" "}
              <a href="" className="underline">
                terms & policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-400 py-[5px] font-semibold text-white text-[17px] rounded-lg"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>
      </div>

      {/* Signup with Google form */}
      <div className="w-full h-[150px] border-t-[1px] border-zinc-500 flex flex-col items-center justify-center gap-[15px]">
        <button
          className="flex items-center justify-center gap-[5px] py-[3px] w-[200px] border-[1px] border-zinc-500 bg-transparent rounded-lg text-[14px] font-semibold"
          onClick={() => authService.loginWithGoogle()}
        >
          <img
            src="/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
            alt=""
            className="h-[25px]"
          />
          Sign in with Google
        </button>

        <h1 className="font-semibold text-[15px]">
          Have an account?{" "}
          <Link className=" text-sky-500 hover:underline" to="/login">
            Log in
          </Link>
        </h1>
      </div>

      {/* OR text */}
      <p className="absolute z-20 bottom-[151px] bg-white left-[50%] font-semibold">
        Or
      </p>
    </div>
  );
};

export default SignUpForm;
