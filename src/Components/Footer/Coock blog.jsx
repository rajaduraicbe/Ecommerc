import React from "react";
import { Calendar } from "lucide-react"; 
import b1 from "./../../assets/Blog/b1.jpg";
import b2 from "./../../assets/Blog/b2.jpg";
import b3 from "./../../assets/Blog/b3.jpg";
import b4 from "./../../assets/Blog/b4.jpg";
import leaf from "./../../assets/Blog/leaf.png";

const blogs = [
  { img: b1, title: "Mastering the Art of Homemade Pizza" },
  { img: b2, title: "Delectable Homemade Ice Cream" },
  { img: b3, title: "How to Prepare Authentic Mexican Tacos" },
  { img: b4, title: "Tips and Techniques for a Restaurant-Quality Steak" },
];

const categories = ["Bakery", "Thai", "Seafood", "Vegan", "BBQ & Grilling","Japanese Sushi Making","Italian Cuisine"];
const countries = ["German", "USA","Spain","France","Maxico"];

export default function LandingSection() {
  return (
    <section className="bg-white py-12 px-6 lg:py-16 lg:px-12 xl:px-20">
      {/* Container with Responsive Order */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 xl:gap-24">
        
        {/* --- BLOG SECTION (Mobile-la ithu thaan first varanum, Desktop-la ithu Right side) --- */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-8 lg:mb-12">
            <img src={leaf} alt="leaf" className="w-7 h-7 object-contain" />
            <h2 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
              Cook Blog
            </h2>
          </div>

          {/* Grid: Mobile-la single column, Desktop-la double column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobile-la 2 card matum kaata nenaicha .slice(0,2) add pannunga */}
            {blogs.slice(0, 4).map((blog, i) => (
              <div
                key={i}
                // Mobile-la last 2 cards-ah hide panna intha logic help pannum
                className={`bg-white rounded-[20px] overflow-hidden border border-[#FDEBD0]/50 shadow-sm hover:shadow-md transition-shadow group ${i >= 2 ? 'hidden md:block' : 'block'}`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#B87333] mb-3">
                    <Calendar size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">24 Apr, 2023</span>
                  </div>
                  <h4 className="font-bold text-[18px] leading-tight text-[#2D2D2D]">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- POPULAR CLASSES (Mobile-la ithu kila varanum, Desktop-la ithu Left side) --- */}
        <div className="flex-none w-full lg:w-[400px] order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-10">
            <img src={leaf} alt="leaf" className="w-7 h-7 object-contain" />
            <h2 className="text-3xl font-bold text-[#2D2D2D] tracking-tight">
              Popular online classes
            </h2>
          </div>

          <div className="lg:pl-6">
            {/* Category */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-[#2D2D2D]">
                Find a tutor by category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((item, i) => (
                  <button
                    key={i}
                    className="px-6 py-2 border border-[#FDEBD0] text-[#B87333] rounded-full text-[15px] font-medium hover:bg-[#FFF5E6]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Country */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 text-[#2D2D2D]">
                Find a tutor by country
              </h3>
              <div className="flex flex-wrap gap-3">
                {countries.map((item, i) => (
                  <button
                    key={i}
                    className="px-8 py-2 border border-[#FDEBD0] text-[#B87333] rounded-full text-[15px] font-medium hover:bg-[#FFF5E6]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}