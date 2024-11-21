import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[70px]">404 Error NotFound</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
