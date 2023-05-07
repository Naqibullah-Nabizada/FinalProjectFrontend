import Image from "next/image";
import Link from "next/link";
import { FaCar, FaFileCsv, FaIdCardAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='w-[95%] mx-auto flex my-4'>
      <div className='w-[40%]'>

        <div className='w-[60%] mt-36'>
          {/* <Link href='./income/id-cards' className='btn btn-outline-dark flex mb-2'><FaIdCard className='mx-1 bg-inherit' />عواید تحویلی کارت هویت محصلین</Link>
          <Link href='./income/ma_forms' className='btn btn-outline-dark flex mb-2'><FaIdCardAlt className='mx-1 bg-inherit' />عواید تحویلی فورم های ماستری</Link>
          <Link href='./income/buildings' className='btn btn-outline-dark flex mb-2'><FaBuilding className='mx-1 bg-inherit' />عواید تحویلی کرایه بلاک های استادان</Link>
          <Link href='./income/vehicles' className='btn btn-outline-dark flex mb-2'><FaCar className='mx-1 bg-inherit' />عواید تحویلی کارت وسایط نقلیه</Link> */}
          <Link href='./income' className='btn btn-outline-dark flex mb-2'>
            <FaFileCsv className='mx-1 bg-inherit' />بخش عواید پوهنتون کابل</Link>

          <Link href='' className='btn btn-outline-dark flex mb-2'>
            <FaIdCardAlt className='mx-1 bg-inherit' />بخش فورم های میم پوهنتون کابل</Link>

          <Link href='' className='btn btn-outline-dark flex mb-2'>
            <FaCar className='mx-1 bg-inherit' />بخش باقی مانده پوهنتون کابل</Link>
        </div>
      </div>
      <div className='w-[60%] mx-auto'>
        <Image src='/img/1675576783.jpg' alt='background' className='img-thumbnail' width={700} height={100} />
      </div>
    </section>
  )
}

export default Hero;