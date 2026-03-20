"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import QrCode from "../../../public/image/home/photo/image.png";
import APP_Stor from "../../../public/image/home/cardBTN/abailable-app-store.png";
import Google_pay from "../../../public/image/home/cardBTN/googlePayBlackBTN.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      if (qrRef.current && qrRef.current.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div className="">
      <div className="">
        <ul className="flex justify-end gap-2 sm:gap-5 md:gap-14 font-medium text-[11.5px] text-[#FFFFFF] py-1 relative">
          <li className="cursor-pointer relative" onClick={handleToggle}>
            <Link href="#">SAVE MORE ON APP</Link>
            <div
              ref={qrRef}
              className={`transition-all duration-500 delay-500 ease-in-out bg-white min-w-80 p-5 ${isOpen ? "inline-block absolute top-8.5 shadow z-10 left-0 opacity-100 " : "hidden opacity-0"}`}
              id="qrCode"
            >
              <div className="w-5 h-5 bg-white rotate-45 absolute -top-2.5 left-[5%] "></div>
              <div>
                <h1 className="text-[17px] text-black ">Download the App</h1>
                <Image src={QrCode} alt="" className="w-30" />
                <div className="flex gap-3 my-2">
                  <Image src={APP_Stor} alt="" className="cursor-pointer" />
                  <Image src={Google_pay} alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </li>
          <li className="cursor-pointer">
            <a>BECOME A SELLER</a>
          </li>
          <li className="cursor-pointer">
            <a>HELP & SUPPORT</a>
          </li>
          <li className="cursor-pointer">
            <a>LOGIN</a>
          </li>
          <li className="cursor-pointer">
            <a>SIGN UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
