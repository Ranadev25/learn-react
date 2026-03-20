import Banners from "./_components/Banners";
import Navber from "./_components/Navber";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto bg-gray-50">
      <Navber />
      <Banners/>
      
    </div>
  );
}
