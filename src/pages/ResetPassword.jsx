import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import authService from "../appwrite/auth";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");
  const secret = queryParams.get("secret");

  useEffect(() => {
    if (!userId || !secret) {
      navigate("/");
      return;
    }
  }, [userId, secret, navigate]);

  const handleReset = async (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      console.log("Password and confirm passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await authService.resetPassword(userId, secret, password);
      console.log("Password reset successful");
      console.log("New Password: ", password);

      setTimeout(() => navigate("/login", 2000));
    } catch (error) {
      console.log("Failed to reset password :: ", error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-950 text-white">
      <div className="h-[440px] w-[350px] border border-gray-700 shadow-xl rounded-lg flex flex-col py-[20px]">
        <h1 className="text-center text-[28px] md:text-[32px] lg:text-[32px] font-semibold">
          Recover Password
        </h1>
        <p className="text-center text-[14px] md:text-[16px] lg:text-[16px] text-gray-400">
          Enter your email to reset your password.
        </p>

        <form
          className="w-full  h-full py-[10px] px-[16px] mt-[60px]"
          onSubmit={handleSubmit(handleReset)}
        >
          <Input
            label="Password"
            type="password"
            className=""
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Input
            label="Confirm Password"
            type="password"
            className=""
            placeholder="Password"
            {...register("confirmPassword", { required: true })}
          />

          <button
            className="w-full bg-white py-[5px] mt-[10px] font-medium text-black text-[17px] rounded-lg transition-all ease-linear duration-200 hover:bg-zinc-200"
            disabled={loading}
            type="submit"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
