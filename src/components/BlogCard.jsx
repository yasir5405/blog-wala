import { ArrowUpRight } from "lucide-react";

const BlogCard = () => {
  return (
    <div className="w-[380px] h-[350px] border-[1px] border-black flex flex-col mb-[20px] cursor-pointer">
      <div className="h-[60%] w-full border-b-2">
        <img
          src="https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="h-[40%] w-full flex flex-col justify-between py-[5px]">
        <h1 className="font-medium text-[14px] text-sky-400">
          Alec Whitten <span className="text-black">|</span> 1 Jan 2023
        </h1>
        <h1 className="font-medium text-[24px] flex items-center gap-[35px]">
          Bill Walsh leadership lessons <ArrowUpRight size={28} className="text-black" />
        </h1>

        <p className="text-[14px] font-medium leading-4 text-gray-600 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          doloribus. Cupiditate culpa quae velit maxime. Optio rem facilis quia
          nostrum.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
