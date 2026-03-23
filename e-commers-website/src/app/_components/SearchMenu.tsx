import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Search from "./../../../public/image/home/ICON/search.png"
import Logo from "./../../../public/image/home/photo/darazLogo.png"

const SearchMenu = () => {
  return (
    <div className="">
      <div className="flex text-[#FFFFFF] py-3 pb-6">
        <div className="w-[30%] sm:w-2/10">
          <Image className="sm:w-6/10" src={Logo} alt=""></Image>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="">
            <div className="join text-black">
              <div >
                <label className="input border-0 rounded outline-0 md:h-12 validator pr-0 join-item w-full sm:w-90 md:w-120 lg:w-170 ">
                  
                  <input type="text" className="w-full" placeholder="Search in Daraz..." required />
                  <Image className=" btn h-full w-15 p-2 px-3 bg-blue-50  join-item " src={Search} alt=""/>
                </label>
                
              </div>
              
            </div>
          </div>
          <div className="ml-5 ">
            <CiShoppingCart className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
