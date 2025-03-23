import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

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
        toast.success("Account created successfully!");
        // console.log("Signup Inputs:", { data });
      }
    } catch (error) {
      setError(error.message);
      toast.error(error);
      console.log("Error while creating account :: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Old Signup Form
    // <div className="w-[400px] h-screen flex flex-col justify-around relative">
    //   <h1 className="font-semibold text-[34px] mt-[30px]">Get Started Now</h1>

    //   {/* Form Div */}
    //   <div className="w-full h-[390px]">
    //     <form
    //       onSubmit={handleSubmit(createUser)}
    //       action=""
    //       className="w-full h-full flex flex-col gap-[30px]"
    //     >
    // <Input
    //   label="Name"
    //   type="text"
    //   className=""
    //   placeholder="Enter your full name"
    //   {...register("name", { required: true })}
    // />

    // <Input
    //   label="Email"
    //   type="email"
    //   className=""
    //   placeholder="Enter your email"
    //   {...register("email", { required: true })}
    // />

    // <Input
    //   label="Password"
    //   type="password"
    //   className=""
    //   placeholder="Password"
    //   {...register("password", { required: true, min: 8 })}
    // />

    //       <div className="w-full flex gap-[5px]">
    //         <input required type="checkbox" name="" id="" />
    //         <label className="font-semibold text-[12px]">
    //           I agree to the{" "}
    //           <a href="" className="underline">
    //             terms & policy
    //           </a>
    //         </label>
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full bg-sky-400 py-[5px] font-semibold text-white text-[17px] rounded-lg"
    //         disabled={loading}
    //       >
    //         {loading ? "Creating account..." : "Sign up"}
    //       </button>
    //     </form>
    //   </div>

    //   {/* Signup with Google form */}
    //   <div className="w-full h-[150px] border-t-[1px] border-zinc-500 flex flex-col items-center justify-center gap-[15px]">
    //     <button
    //       className="flex items-center justify-center gap-[5px] py-[3px] w-[200px] border-[1px] border-zinc-500 bg-transparent rounded-lg text-[14px] font-semibold"
    //       onClick={() => authService.loginWithGoogle()}
    //     >
    //       <img
    //         src="/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
    //         alt=""
    //         className="h-[25px]"
    //       />
    //       Sign in with Google
    //     </button>

    //     <h1 className="font-semibold text-[15px]">
    //       Have an account?{" "}
    //       <Link className=" text-sky-500 hover:underline" to="/login">
    //         Log in
    //       </Link>
    //     </h1>
    //   </div>

    //   {/* OR text */}
    //   <p className="absolute z-20 bottom-[151px] bg-white left-[50%] font-semibold">
    //     Or
    //   </p>
    // </div>

    // New Signup Form
    <div className="w-full h-screen px-2 md:px-0 lg:px-0 flex items-center justify-center bg-zinc-950 text-white">
      {/* Login DIv */}
      <div className="w-[380px] min-h-[475px] border border-gray-800 rounded-xl p-6">
        {/* SIGNUP TEXT */}
        <div className="w-full py-2 flex flex-col">
          <h1 className="text-[28px] md:text-[30px] lg:text-[30px] font-semibold">
            Create an account
          </h1>

          <p className="text-gray-400 text-[14px] md:text-[16px] lg:text-[16px] ">
            Enter your email below to create your account
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
          onSubmit={handleSubmit(createUser)}
          action=""
          className="w-full py-3 flex flex-col gap-3"
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
          </div>

          <button
            type="submit"
            className="w-full bg-white py-[5px] font-medium text-black text-[17px] rounded-lg transition-all ease-linear duration-200 hover:bg-zinc-200"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <h1 className="font-medium text-[14px] text-center">
          Have an account?{" "}
          <Link className="text-zinc-300 underline" to="/login">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SignUpForm;
