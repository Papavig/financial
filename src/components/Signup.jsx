// Import necessary modules and components
import React from "react";

import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // Function to handle Google sign-in
  const handleSignInWithGoogle = async () => {
    try {
      // Sign in with Google using Firebase authentication
    const result = await signInWithPopup(auth, provider);

    // Extract user information from the result
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      isAuth: true,
    };

    // Store authentication information in local storage
    localStorage.setItem("auth", JSON.stringify(authInfo));

    // Navigate to the dashboard after successful sign-in
    navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Render the Signup component
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="shadow-lg rounded-3xl py-8 px-6 bg-mainAccent text-center">
        <img
          src="/assets/rocket.png"
          alt="/"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-auto mx-auto mb-10"
        />
        <h2 className="font-pixel text-mainText text-3xl my-8 sm:my-12 md:my-16 lg:my-20">
          Sign up for an account
        </h2>
        <button
          onClick={handleSignInWithGoogle}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
