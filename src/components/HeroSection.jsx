const HeroSection = () => {
  return (
    <div className="mt-[65px] flex flex-col md:flex-row w-full h-screen md:h-[90vh] lg:h-[85vh] bg-zinc-950 text-white">
      {/* Left Section */}
      <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col justify-center animate-fadeIn">
        {/* Text Content */}
        <div className="w-full flex flex-col justify-center px-6 md:px-[40px] lg:px-20 py-10 space-y-4 md:space-y-5 lg:space-y-6">
          <h1 className="text-zinc-300 font-medium text-lg md:text-xl lg:text-2xl">
            Unleash Your Voice and Inspire the World
          </h1>
          <h1 className="text-[30px] font-semibold leading-[40px] md:text-[50px] md:leading-[60px] lg:text-[55px] lg:leading-[65px]">
            Discover, Create, and Share Your Stories on Blogwala
          </h1>
          <p className="text-zinc-300 text-[14px] md:text-[16px] lg:text-[18px]">
            Join a thriving community where ideas flourish. Blogwala is your
            platform to share insights, discover perspectives, and build
            meaningful connections.
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-3 border-t border-gray-600 py-5">
          {[
            { count: "500+", label: "Inspiring Blogs" },
            { count: "20k+", label: "Monthly Readers" },
            { count: "15k+", label: "Engaged Writers" },
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
      <div className="w-full md:w-[40%] lg:w-[40%] h-[40vh] md:h-full  flex items-center justify-center relative">
        <img
          src="HeroImg.png"
          alt=""
          className="h-full w-full object-contain absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
