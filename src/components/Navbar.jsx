import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold tracking-tight">Feedback App</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
