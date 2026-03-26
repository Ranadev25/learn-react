import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid justify-center pt-20">
      <h1 className="font-medium text-4xl my-5">
        Oops! This site is not Available yet.
      </h1>

      <div className="text-center">
        <Link className="bg-red-500 px-5 py-2 rounded" href="/">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
