"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import QrCode from "../../../public/image/home/photo/image.png";
import APP_Stor from "../../../public/image/home/cardBTN/abailable-app-store.png";
import Google_pay from "../../../public/image/home/cardBTN/googlePayBlackBTN.png";

import { GrUserManager } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { FaCaravan } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const openmenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!qrRef.current) {
        setIsOpen(false);
      }
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

   useEffect(() => {
    const handleClickoutside = (e) => {
      if (!openmenu.current) {
        setOpenMenu(false);
      }
      setOpenMenu(false);
    };

    document.addEventListener("click", handleClickoutside);
    return () => {
      document.removeEventListener("click", handleClickoutside);
    };
  }, [openMenu]);

  return (
    <div className="">
      <div className="">
        <ul className="flex justify-end gap-2 sm:gap-5 md:gap-14 font-medium text-[11.5px] text-[#FFFFFF] py-1 relative">
          <li
            className="cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
          >
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

          <li className="cursor-pointer relative" onClick={() => setOpenMenu(!openMenu)}>
            <a className="">HELP & SUPPORT</a>
            {openMenu ? (
              <div ref={openmenu} className="absolute top-8.5 left-0 z-10 bg-white text-gray-500 min-w-54 p-3">
                <ul>
                  <li >
                    <Link href="" className="flex gap-3 text-2xl items-center my-2" >
                      <GrUserManager />
                      <h1 className="text-[16px]">Help Center</h1>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="flex gap-3 text-2xl items-center my-4">
                      <MdContactPhone />
                      <h1 className="text-[16px]">Contact Customer Care</h1>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="flex gap-3 text-2xl items-center my-4">
                      <FaCaravan/>
                      <h1 className="text-[16px]">Shipping & Delivery</h1>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="flex gap-3 text-2xl items-center my-4">
                      <FaBoxOpen/>
                      <h1 className="text-[16px]">Order</h1>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="flex gap-3 text-2xl items-center my-4">
                      <GiCash/>
                      <h1 className="text-[16px]">Payment</h1>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="flex gap-3 text-2xl items-center mt-4">
                      <LuBadgeDollarSign/>
                      <h1 className="text-[16px]">Returns & Refunds</h1>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
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
