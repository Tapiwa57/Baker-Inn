import Link from "next/link";
import Image from "next/image";
import Bakerlogo from "../../public/images/bakers-inn-category 1.png";

export default function Navbar() {
  return (
    <header className="flex  justify-between py-5 px-10 sm:py-20 md:py-24 lg:py-5 text-blue-950 font-extrabold">
      <Link href="/">
        <Image src={Bakerlogo} alt="baker" width={150} height={150} priority />
      </Link>
      <nav className="flex flex-wrap justify-center gap-10 lg:gap-10 text-2xl ">
        <Link href="/AboutUs" className="hover:text-yellow-700 transition mt-5">About Us</Link>
        <Link href="/Products" className="hover:text-yellow-700 transition mt-5">Products</Link>
        <Link href="/Recipes" className="hover:text-yellow-700 transition mt-5">Recipes</Link>
        <Link href="/Kidscorner" className="hover:text-yellow-700 transition mt-5">Kid&apos;s Corner</Link>
        <Link href="/ContactUs">
          <button className="bg-yellow-700 text-white px-10 py-5 rounded hover:bg-yellow-800 transition">
            Contact Us
          </button>
        </Link>
      </nav>

      <div className="md:hidden">
       
      </div>
    </header>
  );
}
