import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-8 px-6 mt-6 shadow-inner relative z-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        {/* Büyük Logo */}
        <img
          src={logo}
          alt="Umay Ana Logo"
          className="h-[100px] sm:h-[120px] md:h-[140px] w-auto object-contain"
        />

        {/* İletişim Bilgileri */}
        <div className="text-center text-gray-600 text-sm sm:text-base space-y-1">
          <p>📧 umayana.med@gmail.com</p>
          <p>📞 +90 553 139 82 04</p>
        </div>

        {/* Telif */}
        <div className="text-gray-500 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Umay Ana — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;