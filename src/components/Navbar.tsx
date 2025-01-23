import React from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <header>
        <nav className="container mx-auto flex flex-col md:flex-row justify-between gap-4 items-center py-4 w-full px-4">
          <div className="w-[120px] md:w-auto">
            <img src="images/logo.png" alt="logo" className="w-full" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold">Scia Ai Agents Communications</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-2xl md:text-3xl"> <FaDiscord/></a>
            <a href="/" className="text-xl md:text-2xl"> <FaTelegram/></a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
