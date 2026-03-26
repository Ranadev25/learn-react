"use client";
import Image from "next/image";
import React, {useEffect, useState } from "react";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json())
      .then((data) => {
        
        setCategoryData(data)
        setIsLoading(false)
      });
  }, []);

  return (
    <div className="px-8 mb-10">
      <h1 className="text-2xl py-3 text-gray-500 font-medium">Category</h1>
      <div className="flex flex-wrap items-center justify-center rounded-lg">
          {isLoading ? <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div> : categoryData.map((item) => (
            <div
              key={item.id}
              className="text-center border border-gray-300 w-42 h-40 p-5 cursor-pointer  hover:shadow-2xl hover:bg-white "
            >
              <Image
                src={item.image}
                alt={item.category}
                width={80}
                height={80}
                className="w-20 h-20 object-cover mx-auto"
              />
              <p className="text-sm my-2 text-gray-500">{item.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
