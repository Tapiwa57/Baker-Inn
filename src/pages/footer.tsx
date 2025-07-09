import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
    <section>
        <div className="bg-[hsla(248,60%,26%,1)] flex justify-center text-white py-0 " style={{alignItems:"center", flexWrap:"wrap", flexDirection:"column"}}>
      <div className="flex">
        <Image className="flex justify-center m-0" src="/images/Group-13.png" alt="bakerinnlogo" width={100} height={200}/>
      </div>
      <div className="flex justify-evenly flex-wrap gap-20">
        <div className="flex justify-center"style={{alignContent:"center", flexWrap:"wrap", flexDirection:"column"}}>
          <h2 className="text-2xl font-extrabold mb-8">Instagram Feed</h2>
          <div className="flex gap-6">
            <Image src="/images/Rectangle-688.png" alt="bakerpost" width={100} height={100}/>
            <Image src="/images/Rectangle-689.png" alt="bakerpost" width={100} height={100}/>
            <Image src="/images/Rectangle-690.png" alt="bakerpost" width={100} height={100}/>
          </div>
          <div className="flex gap-3 py-5">
            <Image src="/images/Vector-twitter.svg" alt="twitter icon" width={32} height={32}/>
            <Image src="/images/akar-icons_facebook-fill.svg" alt="facebook icon" width={32} height={32}/>
            <Image src="/images/bi_linkedin.svg" alt="linkden" width={32} height={32}/>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold mb-8">Our Location</h2>
          <p className="text-1xl">1 Shepperton Road, <br />Graniteside, <br />Harare <br />Zimbabwe.</p>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold mb-8">Get In Touch With Us</h2>
          <p className="text-1xl"><Image className="inline " src="/images/phone.svg" alt="#" width={20} height={20}/>08080151 <br />08080152 <br />+263 242 751 481 <br />+263 242 710 334 <br /> <Image className="inline" src="/images/envolop.svg" alt="#" width={20} height={20}/> marketing@bakersinnzim.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold mb-8">Sitemap</h2>
          <Link href="/" className="flex mt-0 ">Home</Link>
          <Link href="/AboutUs" className="flex mt-0 ">About Us</Link>
          <Link href="/Products" className="flex mt-0 ">Products</Link>
          <Link href="/Recipes" className="flex mt-0 ">Recipes</Link>
          <Link href="/Kidscorner" className="flex mt-0">Kid&apos;s corner</Link>
          <Link href="/ContactUs"><button className="border-0 p-0 mt-0">Contacts Us</button></Link>
        </div>
      </div>
        <footer className="flex justify-center content-center flex-wrap flex-row gap-65 ml-0 text-2xl py-15" style={{fontSize:"12px"}}>
         <div className=" flex  gap-8 -ml-40 ">
            <h2>Subsidiary of</h2>
             <Image className="-mt-8" src="/images/inscor_logo@2x 1.png" alt="inscorlogo" width={60} height={60}/>
            </div>
         <div className="mr-0">
            <h2 className="" >Copyright © 2022 Bakers Inn. All rights reserved. Site by Sitemap Get In Touch With Us <span className="text-[hsla(40,40%,50%,1)]">NoWalls Pan African</span></h2>
         </div>
        </footer>
    </div>
    </section>
    );
}

         