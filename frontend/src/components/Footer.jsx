import React from "react";

const Footer = () => {
  return (
    <div className="footer">

      <footer className="w-full shadow bg-gray-900">
        <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2024{" "}
            <a href="" class="hover:underline">
              Pseudo Squad™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
