// Import necessary modules and components
import React from "react";

import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  // Function to sign the user out
  const signUserOut = async () => {
    try {
      // Sign out the user using Firebase authentication
      await signOut(auth);
      // Clear local storage
      localStorage.clear();
      // Navigate to the home page
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // Render the Navbar component
  return (
    <nav className="bg-mainAccent p-4 flex justify-between items-center">
      <div className="text-white mr-3 flex items-center">
        <img src="/assets/money_bag.png" alt="/" className="w-4 mr-2" />
        <span className="text-lg font-bold font-pixel">Financial</span>
      </div>

      {/* Logout button */}
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
