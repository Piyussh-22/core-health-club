import React from "react";

const CircleButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-blue-500 text-white text-2xl sm:text-3xl flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default CircleButton;
