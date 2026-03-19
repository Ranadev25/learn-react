// "use client";

import Image from "next/image";
// import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import QrCode from "../../../public/image/home/photo/image.png";
import APP_Stor from "../../../public/image/home/cardBTN/abailable-app-store.png";
import Google_pay from "../../../public/image/home/cardBTN/googlePayBlackBTN.png";

const Menu = () => {
  return (
    <div>
      <div className="">
        <ul className="flex justify-end gap-5 sm:gap-14 font-medium text-[11.5px] text-[#FFFFFF] py-1">
          <li className="cursor-pointer">
            <Link href="#">SAVE MORE ON APP</Link>
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
