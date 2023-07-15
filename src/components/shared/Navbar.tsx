import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import cart from "../../assets/icons/cart.png";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handelLogOut = () => {

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setUser(null))
      })
  };

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src={logo} alt="Logo" />
              <h2 className="font-bold text-[#FF630B] pl-2">Chyra Library</h2>
            </div>
          </div>
          <div className="ml-auto hidden md:block">
            <div className="md:flex items-center space-x-4">
              <ul className="flex ">
                <li className="text-gray-300 text-[#FF630B] px-3 py-2 rounded-md text-sm font-semibold">
                  <Link className="text-black" to="/">
                    Home
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link to="/about" className="hover:text-[#FF630B] text-black">
                    About
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link
                    to="/all-books"
                    className="hover:text-[#FF630B] text-black"
                  >
                    All Books
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link
                    to="/catalog"
                    className="hover:text-[#FF630B]  text-black"
                  >
                    Library catalog
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link
                    to="/contact"
                    className="hover:text-[#FF630B] text-black"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <button className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View cart</span>
                <img src={cart} alt="" />
              </button>
              {user.email ? (
                <div className="relative">
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={logo}
                      alt="Profile"
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                        Profile
                      </button>
                      <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                        Settings
                      </button>
                      <hr className="my-2" />
                      <button
                        onClick={handelLogOut}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <ul className="flex">
                  <li className="ml-3 text-[#898989]  hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    <Link to="/login"> Log In</Link>
                  </li>
                  <li className="ml-3 bg-[#FF630B]  text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="mobileMenu md:hidden">
            {nav ? (
              <button
                onClick={() => {
                  setNav(!nav);
                }}
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  setNav(!nav);
                }}
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            )}

            {nav && (
              <ul className="absolute bg-[#FF975C] w-full h-screen top-[70px] left-0 ">
                <li className="text-gray-300 text-[#FF630B] px-3 py-2 rounded-md text-sm font-semibold">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link to="/about" className="hover:text-[#FF630B]">
                    About
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link to="/catalog" className="hover:text-[#FF630B]">
                    Library catalog
                  </Link>
                </li>
                <li className="text-gray-300 text-black px-3 py-2 rounded-md text-sm font-semibold">
                  <Link to="/contact" className="hover:text-[#FF630B]">
                    Contact Us
                  </Link>
                </li>
                {user.email && (
                  <div className="relative">
                    <button
                      className="flex items-center focus:outline-none"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src={logo}
                        alt="Profile"
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                        <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                          Profile
                        </button>
                        <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                          Settings
                        </button>
                        <hr className="my-2" />
                        <button
                          onClick={handelLogOut}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {!user.email && (
                  <li className="ml-3 text-[#898989]  hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    <Link to="/login"> Log In</Link>
                  </li>
                )}
                {!user.email && (
                  <li className="ml-3 bg-[#FF630B]  text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                )}
                <li className="ml-3 text-[#898989]  hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  <button className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View cart</span>
                    <img src={cart} alt="" />
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
