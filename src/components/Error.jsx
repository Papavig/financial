// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";

// Render the Error component
function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-pixel font-bold text-mainText mb-4">
        404 - Not Found
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white my-5">
        Oops! It seems like there was an error. We apologize for any
        inconvenience.
      </p>
      <Link
        to="/"
        className="mt-4 bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-4 rounded focus:outline-none"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Error;
