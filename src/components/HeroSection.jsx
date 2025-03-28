// const HeroSection = () => {
//   return (
//     <div className="pt-[65px] md:mt-0 lg:mt-0 flex flex-col md:flex-row w-full min-h-screen md:h-[90vh] lg:h-[85vh] bg-zinc-950 text-white">
//       {/* Left Section */}
//       <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col justify-center animate-fadeIn border-b md:border-r border-gray-600">
//         {/* Text Content */}
//         <div className="w-full flex flex-col justify-center px-6 md:px-[40px] lg:px-20 py-12 md:py-16 space-y-5">
//           <h1 className="text-zinc-300 font-medium text-base md:text-xl lg:text-2xl leading-snug">
//             Unleash Your Voice and Inspire the World
//           </h1>
//           <h1 className="text-[28px] font-semibold leading-[38px] md:text-[45px] md:leading-[55px] lg:text-[50px] lg:leading-[60px]">
//             Discover, Create, and Share Your Stories on Blogwala
//           </h1>
//           <p className="text-zinc-300 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
//             Join a thriving community where ideas flourish. Blogwala is your
//             platform to share insights, discover perspectives, and build
//             meaningful connections.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="w-full grid grid-cols-3 border-t border-gray-600 py-4 md:py-6">
//           {[
//             { count: "500+", label: "Inspiring Blogs" },
//             { count: "20k+", label: "Monthly Readers" },
//             { count: "15k+", label: "Engaged Writers" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className={`h-full flex flex-col items-center justify-center py-3 px-4 md:px-8 ${
//                 index !== 2 ? "border-r border-gray-600" : ""
//               }`}
//             >
//               <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
//                 {stat.count}
//               </h1>
//               <h1 className="text-[12px] md:text-[14px] lg:text-[16px] text-center text-zinc-300">
//                 {stat.label}
//               </h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section (Image/Illustration Placeholder) */}
//       <div className="w-full md:w-[40%] lg:w-[40%] h-[300px] sm:h-[400px] md:h-full lg:h-full relative">
//         <img
//           src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Blogwala"
//           className="h-full w-full object-cover"
//         />
//         {/* Dark Gradient Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>

//         {/* Get Started Button */}
//         <button
//           className="bg-white text-black font-semibold text-sm md:text-base py-2 md:py-3 px-5 md:px-6 rounded-lg shadow-md hover:bg-zinc-200 transition-all duration-200 ease-in-out absolute bottom-6 left-1/2 -translate-x-1/2"
//           onClick={() => (window.location.href = "/all-posts")}
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { Pencil } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-[65px] md:mt-0 lg:mt-0 flex flex-col md:flex-row w-full min-h-screen md:h-[90vh] lg:h-[85vh] bg-zinc-950 text-white">
      {/* Left Section */}
      <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col justify-center animate-fadeIn border-b md:border-r border-gray-600">
        {/* Text Content */}
        <div className="w-full flex flex-col justify-center px-6 md:px-[40px] lg:px-20 py-12 md:py-16 space-y-5">
          <h1 className="text-zinc-300 font-medium text-base md:text-xl lg:text-2xl leading-snug">
            Unleash Your Voice and Inspire the World
          </h1>
          <h1 className="text-[28px] font-semibold leading-[38px] md:text-[45px] md:leading-[55px] lg:text-[50px] lg:leading-[60px]">
            Discover, Create, and Share Your Stories on Blogwala
          </h1>
          <p className="text-zinc-300 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
            Join a thriving community where ideas flourish. Blogwala is your
            platform to share insights, discover perspectives, and build
            meaningful connections.
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-3 border-t border-gray-600 py-4 md:py-6">
          {[
            { count: "500+", label: "Inspiring Blogs" },
            { count: "20k+", label: "Monthly Readers" },
            { count: "15k+", label: "Engaged Writers" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`h-full flex flex-col items-center justify-center py-3 px-4 md:px-8 ${
                index !== 2 ? "border-r border-gray-600" : ""
              }`}
            >
              <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
                {stat.count}
              </h1>
              <h1 className="text-[12px] md:text-[14px] lg:text-[16px] text-center text-zinc-300">
                {stat.label}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image/Illustration Placeholder) */}
      <div className="w-full md:w-[40%] lg:w-[40%] h-[300px] sm:h-[400px] md:h-full lg:h-full relative">
        <img
          src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blogwala"
          className="h-full w-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>

        {/* Get Started Button */}
        <button
          className="bg-zinc-800 text-white font-semibold text-sm md:text-base py-3 md:py-3.5 px-6 md:px-8 flex items-center gap-2 rounded-lg shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all duration-200 ease-in-out absolute bottom-6 left-1/2 -translate-x-1/2"
          onClick={() => (window.location.href = "/all-posts")}
        >
          <Pencil size={18} />
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
