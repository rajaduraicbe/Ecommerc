import React from "react";
import Hero from "./../../assets/Landing/Hero.jpg";
import Learn from "./../../assets/Landing/play-circle.svg";

export default function HeroSection() {
  return (
    <div className="bg-lightBg min-h-screen font-poppins px-6 md:px-8 lg:pl-12 lg:pr-26 py-12">
      
      {/* ================= TOP SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-md:text-center">
        
        {/* LEFT CONTENT */}
        <div className="max-md:order-2 md:order-2 lg:order-1 md:text-center md:col-span-2 lg:col-span-1 lg:text-left max-md:mt-16">
          
          <h1 className="text-4xl md:text-5xl max-md:text-3xl font-bold leading-tight text-gray-900">
            
            {/* MOBILE → 3 LINES */}
            <span className="block md:hidden">
              Master the Art of <br />
              Cooking with{" "}
              <span className="text-orange-500 font-bold font-[cursive] italic">
                Experts
              </span>{" "}
              <br />
              Worldwide
            </span>

            {/* TABLET + DESKTOP */}
            <span className="hidden md:block">
              <span className="block lg:inline">
                Master the Art of Cooking
              </span>{" "}
              <span className="block lg:inline">
                with{" "}
                <span className="text-orange-500 font-bold font-[cursive] italic">
                  Experts
                </span>{" "}
                Worldwide
              </span>
            </span>

          </h1>

          <p className="text-gray-600 mt-6 text-md leading-relaxed max-w-xl max-md:mx-auto md:mx-auto lg:mx-0 max-md:text-sm">
            Experience the joy of cooking in a whole new way with our engaging online
            cooking classes. Learn from the chefs, share your unique culinary
            knowledge, and join our growing foodie community. With COOK, learning
            and teaching becomes a shared passion.
          </p>

          {/* Learn more */}
          <div className="flex items-center mt-4 text-sm font-semibold text-gray-700 max-md:justify-center md:justify-center lg:justify-start">
            <img src={Learn} alt="play" className="mr-2 w-5 h-5" />
            Learn more in the COOK video
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 max-md:flex-col max-md:items-center md:justify-center lg:justify-start">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm max-md:w-full">
              Find Your Tutor
            </button>

            <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-md text-sm font-medium max-md:w-full">
              Join Our Chefs
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-center lg:justify-end max-md:order-1 md:order-1 lg:order-2 md:col-span-2 lg:col-span-1">
          <div className="relative">
            
            <img
              src={Hero}
              alt="Cooking"
              className="w-[420px] h-[300px] object-cover rounded-2xl shadow-md md:w-[640px] md:h-[360px] lg:w-[420px] lg:h-[300px] max-md:w-[320px] max-md:h-[240px]"
            />

            {/* REVIEW CARD */}
            <div className="
              absolute 
              md:left-[-40px] md:bottom-[-10px] 
              max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-[-60px]
              lg:hidden
              bg-white border border-orange-200 rounded-xl p-4 w-[220px] shadow-md
            ">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-semibold">David Mitchell</p>
                  <p className="text-xs text-gray-500">4.8 ★</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                I’ve discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ================= STATS CARD ================= */}
      <div className="px-28 md:px-4 lg:px-28 py-16 max-md:px-4">
        <div className="mt-16 relative border border-orange-200 rounded-xl bg-orange-50 py-8 max-md:py-6">
          
          {/* LEFT LINE (desktop only) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-orange-300 max-md:hidden"></div>

          {/* RIGHT LINE (desktop only) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-orange-300 max-md:hidden"></div>

          {/* CONTENT */}
          <div className="px-12 max-md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-6">
              
              <div>
                <h2 className="text-orange-500 text-3xl max-md:text-xl font-extrabold">100+</h2>
                <p className="text-gray-600 text-md max-md:text-xs mt-1">Talented Chefs</p>
              </div>

              <div>
                <h2 className="text-orange-500 text-3xl max-md:text-xl font-extrabold">1000+</h2>
                <p className="text-gray-600 text-md max-md:text-xs mt-1">Students</p>
              </div>

              <div>
                <h2 className="text-orange-500 text-3xl max-md:text-xl font-extrabold">4.8 ★</h2>
                <p className="text-gray-600 text-md max-md:text-xs mt-1">Rating</p>
              </div>

              <div>
                <h2 className="text-orange-500 text-3xl max-md:text-xl font-extrabold">20+</h2>
                <p className="text-gray-600 text-md max-md:text-xs mt-1">Cooking Categories</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}