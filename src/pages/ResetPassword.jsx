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
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="h-[440px] w-[350px] border-[1px] border-zinc-300 shadow-xl rounded-lg flex flex-col py-[20px]">
        <h1 className="text-center text-[18px] font-semibold">
          Recover Password
        </h1>
        <p className="text-center text-[14px] text-gray-400">
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
            className="w-full bg-[#2F2F31] text-white rounded-md mt-[15px] text-[14px] py-[5px] hover:bg-[#3a3a3b] transition-all ease-linear duration-100"
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
