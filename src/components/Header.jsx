import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full flex justify-center items-center py-2 sm:py-4">
      <div className="flex justify-center items-center w-full max-w-[800px]">
        <img
          src={logo}
          alt="Umay Ana Logo"
          className="h-[180px] sm:h-[220px] lg:h-[280px] w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90"
          onClick={() => navigate("/")}
          title="Ana Sayfa"
        />
      </div>
    </header>
  );
};

export default Header;