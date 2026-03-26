import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    /* px-0: Mobile (0px) and Tablet (768px) rendu pakkamum gap irukaathu.
       lg:pl-12 lg:pr-26: Desktop (1024px+) la mattum hero section line-ku ulla varum.
    */
    <footer className="bg-white font-poppins px-0 lg:pl-12 lg:pr-26 pt-16 pb-0">
      
      {/* MAIN ORANGE BOX */}
      <div className="
        bg-[#d27622] 
        w-full 
        /* Tab/Mobile-la rounded corners venam (to stick to edges) 
           Desktop-la mattum top rounded. */
        rounded-none lg:rounded-t-[30px] 
        px-8 md:px-12 
        pt-16 
        pb-10 
        text-white
      ">

        {/* LOGO: Center on Mobile/Tab, Left on Desktop */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#f6d2a7] text-center lg:text-left mb-16">
          COOK
        </h1>

        {/* TOP GRID: Tab view-la 2 columns-ah split panna nalla space kidaikkum */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">About Us</h3>
            <ul className="space-y-4 text-[16px] text-[#f3e3d3]">
              <li>Who we are</li>
              <li>How it works</li>
              <li>COOK reviews</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">For Students</h3>
            <ul className="space-y-4 text-[16px] text-[#f3e3d3]">
              <li>Who we are</li>
              <li>How it works</li>
              <li>COOK reviews</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">For Tutors</h3>
            <ul className="space-y-4 text-[16px] text-[#f3e3d3]">
              <li>Become an online chef</li>
              <li>Teach cooking online</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Supports</h3>
            <ul className="space-y-4 text-[16px] text-[#f3e3d3]">
              <li>Need a help?</li>
            </ul>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="h-[1px] bg-white/20 w-full my-16"></div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left">
          
          <div className="flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Legal</h3>
            <ul className="text-[16px] text-[#f3e3d3] space-y-4">
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <h3 className="font-bold text-lg mb-2 uppercase tracking-widest text-[#f3e3d3]/60 text-sm">USA</h3>
            <p className="text-[16px] text-[#f3e3d3]">Your address goes there</p>
            <p className="text-[16px] text-[#f3e3d3] mt-2">+0000000000</p>
          </div>

          <div className="flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Cook’s Socials</h3>
            <div className="flex gap-6 text-2xl">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 text-center text-[15px] text-[#f3e3d3]">
          2023©
        </div>

      </div>
    </footer>
  );
};

export default Footer;