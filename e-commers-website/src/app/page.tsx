import { Suspense } from "react";
import Banners from "./_components/Banners";
import Navber from "./_components/Navber";
import Category from "./lib/Category";


export default function Home() {
  return (
    <div className="max-w-400 mx-auto bg-gray-50">
      <Navber />
      <Banners />
      <Suspense fallback={
        <div className="text-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <Category />
      </Suspense>
      
    </div>
  );
}
