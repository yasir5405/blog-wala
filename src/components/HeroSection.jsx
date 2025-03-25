const HeroSection = () => {
  return (
    <div className="mt-[65px] flex flex-col md:flex-row w-full h-screen md:h-[90vh] lg:h-[90vh] bg-zinc-950 text-white">
      {/* Left Section */}
      <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col animate-fadeIn">
        {/* Text Content */}
        <div className="w-full flex flex-col justify-center px-6 md:px-[40px] lg:px-20 py-10 space-y-4 md:space-y-5 lg:space-y-6">
          <h1 className="text-zinc-300 font-medium text-lg md:text-xl lg:text-2xl">
            Your Journey to Tomorrow begins here
          </h1>
          <h1 className="text-[30px] font-semibold leading-[40px] md:text-[50px] md:leading-[60px] lg:text-[55px] lg:leading-[65px]">
            Explore the Frontiers of Artificial Intelligence
          </h1>
          <p className="text-zinc-300 text-[14px] md:text-[16px] lg:text-[18px]">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future.
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-3 border-t border-gray-600 py-5">
          {[
            { count: "300+", label: "Resources available" },
            { count: "12k+", label: "Total downloads" },
            { count: "10k+", label: "Active users" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`h-full flex flex-col items-center justify-center py-3 px-4 md:px-10 border-gray-600 ${
                index !== 2 ? "border-r" : ""
              }`}
            >
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                {stat.count}
              </h1>
              <h1 className="text-[12px] md:text-[14px] lg:text-[16px] text-center">
                {stat.label}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image/Illustration Placeholder) */}
      <div className="w-full md:w-[40%] lg:w-[40%] h-[40vh] md:h-full bg-white flex items-center justify-center">
        {/* Replace with an actual image */}
        <h2 className="text-black text-lg md:text-2xl">Image Here</h2>
      </div>
    </div>
  );
};

export default HeroSection;
