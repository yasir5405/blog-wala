import service from "@/appwrite/config";
import { Input } from "@/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const contact = async (data) => {
    setLoading(true);

    try {
      const query = await service.createContactQuery(data);
      if (query) {
        toast.success("Query submitted successfully.");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error sending query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[65px] w-full h-[calc(100vh-65px)]  flex flex-col md:flex-row lg:flex-row bg-zinc-950 text-white">
      {/* LEft Div/ Top Div */}
      <div className="w-full h-[30%] md:h-full lg:h-full md:w-[40%] lg:w-[40%] flex flex-col justify-center items-start px-6 md:px-28 lg:px-32 gap-[10px]">
        <h1 className="font-semibold text-[45px] md:text-[45px]">Contact Us</h1>
        <p className="text-gray-200 text-[16px] md:text-[18px]">
          We&apos;d love your input: questions, feature requests, bugs or
          compliments.
        </p>
      </div>
      <div className="w-full h-[70%] md:h-full lg:h-full md:w-[60%] lg:w-[60%] flex flex-col items-center justify-center px-2 md:px-28 lg:px-32">
        <form
          onSubmit={handleSubmit(contact)}
          className="w-full h-full p-4 flex flex-col gap-[15px] items-center justify-center"
        >
          <div className="flex gap-[10px] w-full max-w-full overflow-hidden">
            <Input
              className="w-full bg-zinc-900 focus:border-white"
              placeholder="Name"
              type="text"
              {...register("name", { required: true })}
            />
            <Input
              className="w-full bg-zinc-900 focus:border-white"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <Input
            className="w-full bg-zinc-900 focus:border-white"
            placeholder="Subject"
            type="text"
            {...register("subject", { required: true })}
          />
          <textarea
            className="w-full h-40 bg-zinc-900 focus:border-white placeholder:text-zinc-400 placeholder:text-sm placeholder:text-[14px] py-2 px-[5px]  outline-none resize-none border-[1px] border-zinc-500 rounded-lg"
            placeholder="Your message"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg shadow-md focus:ring-4 focus:ring-zinc-300 transition-all ease-linear duration-200 hover:bg-zinc-200"
            disabled={loading}
          >
            {loading ? "Sending Query..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
