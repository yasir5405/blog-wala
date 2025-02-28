// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import authService from "../../appwrite/auth";
// import { useDispatch } from "react-redux";
// import { logout } from "../../store/authSlice";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.auth.userData);

//   const handleLogout = async () => {
//     await authService.logout();
//     dispatch(logout());
//   };

//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "All Posts",
//       link: "/all-posts",
//     },
//     {
//       name: "Add Post",
//       link: "/add-post",
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//     },
//   ];

//   return (
//     <nav className="w-full h-[65px] flex items-center justify-between px-[150px] border-b-[1px] border-gray-200 shadow-md">
//       <h1 className="text-[20px] font-[600] flex gap-[10px] items-center">
//         <img src="https://stealthwriter.ai/logo-icon.svg" alt="" />
//         BlogWala
//       </h1>

//       <div className="h-full items-center justify-center flex gap-[50px]">
//         {navLinks.map(({ name, link }, i) => (
//           <NavLink
//             className={({ isActive }) =>
//               `font-[500] text-[14px] hover:text-black transition-all ease-linear ${
//                 isActive ? "text-black" : "text-zinc-500"
//               }`
//             }
//             to={link}
//             key={i}
//           >
//             {name}
//           </NavLink>
//         ))}
//         {userData && (
//           <NavLink
//             className={({ isActive }) =>
//               `font-[500] text-[14px] hover:text-black transition-all ease-linear ${
//                 isActive ? "text-black" : "text-zinc-500"
//               }`
//             }
//             to={`/${userData?.$id}`}
//           >
//             Profile
//           </NavLink>
//         )}
//       </div>
//       <div>
//         {userData ? (
//           <button
//             className="font-medium text-[15px] border-[1px] border-zinc-400 py-[7px] px-[20px] text-[#FAFAFA] bg-[#2F2F31] rounded-lg transition-all ease-linear duration-100 hover:bg-[#3a3a3b]"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         ) : (
//           <div className="flex gap-[10px]">
//             <Link to={"/login"}>
//               <button className="font-[500] text-[15px] border-[1px] border-zinc-300 py-[7px] px-[20px] hover:bg-zinc-50 transition-all ease-linear duration-200 text-black rounded-lg">
//                 Login
//               </button>
//             </Link>
//             <Link to={"/signup"}>
//               <button className="font-medium text-[15px] border-[1px] border-zinc-400 py-[7px] px-[20px] text-[#FAFAFA] bg-[#2F2F31] rounded-lg transition-all ease-linear duration-100 hover:bg-[#3a3a3b]">
//                 Signup
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
  };

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Posts",
      link: "/all-posts",
    },
    {
      name: "Add Post",
      link: "/add-post",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="w-full h-[65px] flex items-center justify-between px-6 md:px-12 lg:px-20 border-b-[1px] border-gray-200 shadow-md bg-white relative">
      {/* Logo */}
      <h1 className="text-lg md:text-xl font-semibold flex gap-2 items-center">
        <img
          src="https://stealthwriter.ai/logo-icon.svg"
          alt=""
          className="h-8 w-8"
        />
        BlogWala
      </h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ name, link }, i) => (
          <NavLink
            className={({ isActive }) =>
              `font-medium text-sm hover:text-black transition-all ease-linear ${
                isActive ? "text-black" : "text-zinc-500"
              }`
            }
            to={link}
            key={i}
          >
            {name}
          </NavLink>
        ))}
        {userData && (
          <NavLink
            className={({ isActive }) =>
              `font-medium text-sm hover:text-black transition-all ease-linear ${
                isActive ? "text-black" : "text-zinc-500"
              }`
            }
            to={`/${userData?.$id}`}
          >
            Profile
          </NavLink>
        )}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {userData ? (
          <button
            className="font-medium text-[15px] border-[1px] border-zinc-400 py-[7px] px-[20px] text-[#FAFAFA] bg-[#2F2F31] rounded-lg transition-all ease-linear duration-100 hover:bg-[#3a3a3b]"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-[10px]">
            <Link to={"/login"}>
              <button className="font-medium text-[15px] border-[1px] border-zinc-300 py-[7px] px-[20px] hover:bg-zinc-50 transition-all ease-linear duration-200 text-black rounded-lg">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="font-medium text-[15px] border-[1px] border-zinc-400 py-[7px] px-[20px] text-[#FAFAFA] bg-[#2F2F31] rounded-lg transition-all ease-linear duration-100 hover:bg-[#3a3a3b]">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          {navLinks.map(({ name, link }) => (
            <NavLink
              key={link}
              to={link}
              className="py-2 text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
          {userData && (
            <NavLink
              to={`/${userData?.$id}`}
              className="py-2 text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
          )}
          {userData ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="mt-3 py-2 px-4 text-white bg-gray-900 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col w-full items-center gap-2 mt-3">
              <Link to="/login">
                <button
                  className="w-32 text-sm border border-gray-300 py-2 px-4 hover:bg-gray-100 transition-all rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button
                  className="w-32 text-sm border border-gray-400 py-2 px-4 bg-gray-900 text-white rounded-lg transition-all hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
