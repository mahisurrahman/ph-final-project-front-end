import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import cartIcon from "../../../../public/icon/cart.png";

const Navbar = () => {
  const links = (
    <>
      <div className="flex gap-5 text-sm md:text-lg text-black items-center text-white">
        <Link>
          <p>Home</p>
        </Link>
        <Link>
          <p>Contact Us</p>
        </Link>
        <Link>
          <p>Dashboard</p>
        </Link>
        <Link>
          <p>Our Menu</p>
        </Link>
        <Link className="flex gap-2 items-center">
          <p>Our Shop</p>
          <img className="w-10" src={cartIcon} alt="" />
        </Link>
        <Link className="flex gap-2 items-center">
          <p>Sign In</p>
          <p>
            <FaUserCircle className="text-2xl text-white"></FaUserCircle>
          </p>
        </Link>
      </div>
    </>
  );

  return (
    <div className="fixed z-10 navbar bg-black bg-opacity-60 max-w-screen-xl px-4 text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <div className="flex flex-col font-font-cinzel">
      <p className="mx-0 my-0 px-0 py-0 text-2xl font-semibold uppercase">Bistro Boss</p>
      <p className="mx-0 my-0 px-0 py-0 text-xl font-light tracking-widest uppercase">Restaurant</p>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
