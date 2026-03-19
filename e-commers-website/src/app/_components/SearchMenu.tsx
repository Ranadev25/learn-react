import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Search from "./../../../public/image/home/ICON/search.png"
import Logo from "./../../../public/image/home/photo/darazLogo.png"

const SearchMenu = () => {
  return (
    <div>
      <div className="flex text-[#FFFFFF] py-3">
        <div className="w-2/8">
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <Image className="w-4/8" src={Logo} alt=""></Image>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="">
            <div className="join text-black">
              <div >
                <label className="input border-0 rounded-none outline-0 validator pr-0 join-item sm:w-90 md:w-120 lg:w-150">
                  
                  <input type="text" placeholder="Search in Daraz..." required />
                  <Image className=" btn w-12 bg-blue-50 px-2 join-item " src={Search} alt=""/>
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
