import Image from 'next/image'
import BannerImage from './../../../public/image/home/photo/infinetBanner.gif'

const Banner_secend = () => {
  return (
    <div className='w-full sm:w-[90%] mx-auto my-6'>
      <Image src={BannerImage}  alt="" className='w-full'/>
    </div>
  )
}

export default Banner_secend