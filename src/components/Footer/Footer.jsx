// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMailBulk,
//   FaPhone,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import Logo from "../Logo";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="w-full border-t border-gray-600 bg-zinc-950 mt-[20px] text-white h-[50vh] px-6 md:px-12 py-2 lg:px-20 flex flex-col">
//       <div className="w-full h-[calc(50vh-40px)] flex">
//         <div className="w-[450px]  h-full flex flex-col justify-center gap-6">
//           <Logo />
//           <p className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
//             eligendi vel enim sequi doloribus omnis, ratione placeat aspernatur
//             possimus earum.
//           </p>
//           <div className="w-full flex gap-6">
//             <FaFacebook
//               fill="white"
//               color="white"
//               size={24}
//               className="hover:cursor-pointer"
//             />
//             <FaTwitter
//               fill="white"
//               color="white"
//               size={24}
//               className="hover:cursor-pointer"
//             />
//             <FaInstagram
//               fill="white"
//               color="white"
//               size={24}
//               className="hover:cursor-pointer"
//             />
//             <FaLinkedin
//               fill="white"
//               color="white"
//               size={24}
//               className="hover:cursor-pointer"
//             />
//             <FaYoutube
//               fill="white"
//               color="white"
//               size={24}
//               className="hover:cursor-pointer"
//             />
//           </div>
//         </div>

//         <div className="w-full h-full gap-10 flex pl-10 justify-between">
//           <div className="h-full px-[40px] flex flex-col py-12">
//             <h1 className="text-white text-[16px] font-semibold">Products</h1>
//             <div className="w-full flex flex-col mt-4 gap-2">
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Features
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Pricing
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Case Studies
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Reviews
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Updates
//               </Link>
//             </div>
//           </div>

//           <div className="h-full px-[40px] flex flex-col py-12">
//             <h1 className="text-white text-[16px] font-semibold">Company</h1>
//             <div className="w-full flex flex-col mt-4 gap-2">
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 About
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Contact us
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Careers
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Culture
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Blog
//               </Link>
//             </div>
//           </div>

//           <div className="h-full px-[40px] flex flex-col py-12">
//             <h1 className="text-white text-[16px] font-semibold">Support</h1>
//             <div className="w-full flex flex-col mt-4 gap-2">
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Getting started
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Help center
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Server status
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Report a bug
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline"
//               >
//                 Chat support
//               </Link>
//             </div>
//           </div>

//           {/* Big */}
//           <div className="h-full px-[40px] flex flex-col py-12">
//             <h1 className="text-white text-[16px] font-semibold">Contact us</h1>
//             <div className="w-full flex flex-col mt-4 gap-2">
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline flex gap-2 items-center"
//               >
//                 <FaMailBulk /> contact@company.com
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline flex gap-2 items-center"
//               >
//                 <FaPhone /> (414) 687 - 5892
//               </Link>
//               <Link
//                 to={"/"}
//                 className="text-gray-300 text-[14px] hover:underline flex gap-2 items-center"
//               >
//                 <FaLocationArrow /> 794 Mcallister St San Francisco, 94102
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full border-t border-gray-600 h-[40px] flex items-center justify-between text-gray-300">
//         <p>Copyright &copy; 2025 BlogWala</p>

//         <p>
//           All Rights Reserved |{" "}
//           <Link to={"/"} className="underline">
//             Terms and Conditions
//           </Link>{" "}
//           |{" "}
//           <Link to={"/"} className="underline">
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-600 bg-zinc-950 text-white mt-[20px] px-6 py-6 md:px-12 md:py-8 lg:px-20 lg:py-10">
      {/* Main Footer Container */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-12 md:gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <Logo />
          <p className="text-zinc-400 text-sm leading-relaxed">
            Blogwala empowers writers to share their stories, explore trending
            topics, and connect with a thriving community of readers. Join us in
            shaping the future of digital storytelling.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <FaFacebook
              size={24}
              className="hover:text-sky-500 cursor-pointer transition duration-200"
            />
            <FaTwitter
              size={24}
              className="hover:text-sky-500 cursor-pointer transition duration-200"
            />
            <FaInstagram
              size={24}
              className="hover:text-pink-500 cursor-pointer transition duration-200"
            />
            <FaLinkedin
              size={24}
              className="hover:text-blue-600 cursor-pointer transition duration-200"
            />
            <FaYoutube
              size={24}
              className="hover:text-red-500 cursor-pointer transition duration-200"
            />
          </div>
        </div>

        {/* Link Sections */}
        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Products */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[16px] font-semibold">Products</h1>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <Link to="/" className="hover:underline">
                Features
              </Link>
              <Link to="/" className="hover:underline">
                Pricing
              </Link>
              <Link to="/" className="hover:underline">
                Case Studies
              </Link>
              <Link to="/" className="hover:underline">
                Reviews
              </Link>
              <Link to="/" className="hover:underline">
                Updates
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[16px] font-semibold">Company</h1>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <Link to="/" className="hover:underline">
                About
              </Link>
              <Link to="/" className="hover:underline">
                Contact Us
              </Link>
              <Link to="/" className="hover:underline">
                Careers
              </Link>
              <Link to="/" className="hover:underline">
                Culture
              </Link>
              <Link to="/" className="hover:underline">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[16px] font-semibold">Support</h1>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <Link to="/" className="hover:underline">
                Getting Started
              </Link>
              <Link to="/" className="hover:underline">
                Help Center
              </Link>
              <Link to="/" className="hover:underline">
                Server Status
              </Link>
              <Link to="/" className="hover:underline">
                Report a Bug
              </Link>
              <Link to="/" className="hover:underline">
                Chat Support
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[16px] font-semibold">Contact Us</h1>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <Link to="/" className="hover:underline flex items-center gap-2">
                <FaMailBulk /> support@blogwala.com
              </Link>
              <Link to="/" className="hover:underline flex items-center gap-2">
                <FaPhone /> (414) 687 - 5892
              </Link>
              <Link to="/" className="hover:underline flex items-center gap-2">
                <FaLocationArrow /> 794 McAllister St, San Francisco, CA 94102
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-600 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400 text-center md:text-left">
          &copy; 2025 Blogwala. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline text-zinc-400">
            Terms and Conditions
          </Link>
          <Link to="/" className="hover:underline text-zinc-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
