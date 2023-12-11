import React from "react";

import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="text-center bg-main">
        {/* <Navbar /> */}
        <div className="sm:container sm:mx-auto">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
