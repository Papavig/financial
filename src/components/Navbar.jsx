import React from "react";
import { MdLogout } from "react-icons/md";

const Navbar = () => {

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-mainAccent p-4 flex justify-between items-center">
      <div className="text-white mr-3 flex items-center">
        <img src="public\assets\money_bag.png" alt="/" className="w-4 mr-2" />
        <span className="text-lg font-bold font-pixel">Financial</span>
      </div>

      <div className="font-bold text-sm">
        <a
          className="flex items-center border-2 border-rose-500 px-2 py-1 rounded-md text-rose-500"
          href="/"
          onClick={signUserOut}
        >
          Log Out <MdLogout className="ml-2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
