import Image from "next/image";
import Link from "next/link";

import Daraz from "./../../../public/image/home/ICON/darazicon.ico";
import Folder from "./../../../public/image/home/photo/folder.png";
import Qrcode from "./../../../public/image/home/photo/image.png";
import App_Stor from "./../../../public/image/home/cardBTN/appStorebtn.png";
import Google_Pay from "./../../../public/image/home/cardBTN/googlePaybtn.png";
import Star from "./../../../public/image/home/ICON/star.png";
import Care from "./../../../public/image/home/ICON/carIcon.avif";
import Parseint from "./../../../public/image/home/ICON/Picon.png";

const Side_Download_App = () => {
  return (
    <div className="bg-[#f3140818] p-1.5 w-1/6 max-lg:hidden">
      <div>
        <div className="flex  items-center ">
          <Image src={Daraz} alt="" className="w-12 " />
          <h1 className="text-[16px] font-medium text-[#6C1D00]">
            Download the App
          </h1>
        </div>
        <div className="relative">
          <Image src={Folder} alt="" className="w-full my-1" />
          <div className="text-white">
            <Image
              src={Star}
              alt=""
              className="absolute top-1.5 w-3.5 left-2"
            />
            <p className="absolute top-1 left-6.5 text-white text-[12px] font-medium">
              4.8 Rated
            </p>
            <h1 className="absolute top-7 left-10 text-[13px] font-medium ">
              Download App
            </h1>
            <div className="flex gap-3 items-center absolute top-12 left-9 leading-5 mt-3 font-medium text-md  w-32">
              <Image src={Care} alt="" className="w-13" />
              <h2>Free Delivery</h2>
            </div>
            <div className="flex gap-3 items-center absolute bottom-3 left-9 leading-5 mt-3 font-medium text-md  w-32">
              <Image src={Parseint} alt="" className="w-13" />
              <h2>Limited Time</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-2  items-center gap-2">
          <div>
            <Image src={Qrcode} alt="" className="w-20" />
          </div>
          <div className="flex flex-col gap-2">
            <Link href="">
              <Image src={App_Stor} alt="" className="w-25" />
            </Link>
            <Link href="">
              <Image src={Google_Pay} alt="" className="w-25" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[12px] font-medium mt-2">
            Download the App Now!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Side_Download_App;
