import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Input from "../components/Input";
import { useState } from "react";

const RecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const passwordRecovery = async (data) => {
    setLoading(true);
    try {
      const recover = await authService.recoverPassword(data);
      console.log("Reset Password link sent.");
      return recover;
    } catch (error) {
      console.log("Error while recovering the password :: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="h-[300px] w-[300px] border-[1px] border-zinc-300 shadow-xl rounded-lg flex flex-col py-[20px]">
        <h1 className="text-center text-[18px] font-semibold">
          Recover Password
        </h1>
        <p className="text-center text-[14px] text-gray-400">
          Enter your email to reset your password.
        </p>

        <form
          className="w-full  h-full py-[10px] px-[16px] mt-[60px]"
          onSubmit={handleSubmit(passwordRecovery)}
        >
          <Input
            label="Email"
            type="email"
            className=""
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <button
            className="w-full bg-[#2F2F31] text-white rounded-md mt-[15px] text-[14px] py-[5px] hover:bg-[#3a3a3b] transition-all ease-linear duration-100"
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
