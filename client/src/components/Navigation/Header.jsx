import { Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState(false);
  const handleForm = (event) => {
    event.preventDefault();
    setSearch(false);
  };
  const handleSearch = () => {
    setSearch(!search);
  };
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <>
      <div className="grid grid-cols-[30%_auto] justify-between items-center py-[20px] text-white">
        <h2>Logo</h2>
        <div className="flex items-center float-right space-x-10">
          <div className="md:flex items-center float-right space-x-10 hidden">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Pages</a>
            <a className="cursor-pointer">Shop</a>
            <a className="cursor-pointer">Blog</a>
            <a className="cursor-pointer">Contact Us</a>
          </div>
          <select className="cursor-pointer md:flex hidden bg-transparent focus:border-0">
            <option selected className="bg-black">
              English
            </option>
            <option className="bg-black">Urdu</option>
          </select>
          <ShoppingCart className="cursor-pointer" />
          <Search
            className="md:flex hidden cursor-pointer"
            onClick={handleSearch}
          />
          <Menu
            className="md:hidden cursor-pointer"
            onClick={handleMobileNav}
          />
        </div>
      </div>
      {mobileNav && (
        <div
          className="absolute md:hidden bg-gray-800 left-[300px] z-50  top-[0px] text-white w-56 h-[650px] overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
          id="sidebar"
        >
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Menu</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  className="block hover:text-[#1941B9] cursor-pointer"
                  onClick={handleMobileNav}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block hover:text-[#1941B9] cursor-pointer"
                  onClick={handleMobileNav}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block hover:text-[#1941B9] cursor-pointer"
                  onClick={handleMobileNav}
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="block hover:text-[#1941B9] cursor-pointer"
                  onClick={handleMobileNav}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {search && (
        <form
          className="absolute left-[70%]  mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border hidden md:flex focus-within:border-gray-300"
          onSubmit={handleForm}
        >
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent w-full focus:outline-none pr-4  border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button
            type="submit"
            className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full   border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#1941B9] text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3"
          >
            Search
          </button>
        </form>
      )}
    </>
  );
};

export default Header;
