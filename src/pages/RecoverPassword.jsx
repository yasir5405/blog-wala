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
    <div className="h-screen w-full flex items-center justify-center bg-zinc-950 text-white">
      <div className="h-[300px] w-[300px] border border-gray-700 shadow-xl rounded-lg flex flex-col py-[20px]">
        <h1 className="text-center text-[28px] md:text-[32px] lg:text-[32px] font-semibold">
          Recover Password
        </h1>
        <p className="text-center text-[14px] md:text-[16px] lg:text-[16px] text-gray-400">
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
            className="w-full bg-white py-[5px] mt-[10px] font-medium text-black text-[17px] rounded-lg transition-all ease-linear duration-200 hover:bg-zinc-200"
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
