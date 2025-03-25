import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    toast.success("Logged out successfully");
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[65px] flex items-center justify-between px-6 md:px-12 lg:px-20 border-b border-gray-600 shadow-md text-white fixed top-0 left-0 z-50 ${
        isScrolled
          ? "bg-white/5 backdrop-blur-md border-b border-zinc-700 shadow-lg"
          : "bg-zinc-950"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-lg md:text-xl font-semibold flex gap-2 items-center">
          <img
            src="https://stealthwriter.ai/logo-icon.svg"
            alt=""
            className="h-8 w-8 invert brightness-0"
          />
          BlogWala
        </h1>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ name, link }, i) => (
          <NavLink
            className={({ isActive }) =>
              `font-medium text-sm hover:text-zinc-300 transition-all ease-linear ${
                isActive ? "text-zinc-200" : "text-[#B5B5B7]"
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
              `font-normal text-sm hover:text-zinc-300 transition-all ease-linear ${
                isActive ? "text-zinc-200" : "text-[#B5B5B7]"
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
            className="font-medium text-[15px] border-[1px] border-zinc-400 py-[7px] px-[20px] text-black bg-white rounded-lg transition-all ease-linear duration-300 hover:bg-zinc-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-[10px]">
            <Link to={"/login"}>
              <button className="font-medium text-[15px] border border-zinc-500 py-[7px] px-[20px] hover:bg-zinc-800 transition-all ease-linear duration-200 text-white rounded-lg">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="font-medium text-[15px] py-[7px] px-[20px] text-black bg-white rounded-lg transition-all ease-linear duration-300 hover:bg-zinc-200">
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
        <div className="absolute top-16 left-0 w-full bg-[#09090B] text-white shadow-2xl flex flex-col items-center py-4 md:hidden border-b border-gray-500">
          {navLinks.map(({ name, link }) => (
            <NavLink
              key={link}
              to={link}
              className="py-2 text-sm font-medium text-white hover:text-zinc-300"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
          {userData && (
            <NavLink
              to={`/${userData?.$id}`}
              className="py-2 text-sm font-medium text-white hover:text-zinc-300"
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
              className="mt-3 font-medium text-[15px] py-[7px] px-[20px] text-black bg-white rounded-lg transition-all ease-linear duration-300 hover:bg-zinc-200"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col w-full items-center gap-2 mt-3">
              <Link to="/login">
                <button
                  className="font-medium text-[15px] border border-zinc-500 py-[7px] px-[20px] hover:bg-zinc-800 transition-all ease-linear duration-200 text-white rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button
                  className=" mt-2font-medium text-[15px] py-[7px] px-[20px] text-black bg-white rounded-lg transition-all ease-linear duration-300 hover:bg-zinc-200"
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
