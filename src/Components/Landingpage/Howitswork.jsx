import React from "react";
import howitsworkImg1 from "../../assets/Advantages_&_Howitswork/Images/howitsworkimg1.png";
import howitsworkImg2 from "../../assets/Advantages_&_Howitswork/Images/howitsworkimg2.png";
import howitsworkImg3 from "../../assets/Advantages_&_Howitswork/Images/howitsworkimg3.png";

const steps = [
  {
    id: 1,
    title: "Explore Our Culinary Experts",
    desc: "Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.",
    img: howitsworkImg1,
    reverse: false,
  },
  {
    id: 2,
    title: "Select Your Perfect Match",
    desc: "Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.",
    img: howitsworkImg2,
    reverse: true,
  },
  {
    id: 3,
    title: "Enjoy Your Interactive Lesson",
    desc: "Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.",
    img: howitsworkImg3,
    reverse: false,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          
          <div className="flex items-center gap-3 relative">
            
            {/* UPDATED CURVED SMILE SHAPE */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 50 Q50 10 80 50"
                  stroke="#D27722"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                How It Works
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Getting Started with the COOK Platform
              </p>
            </div>
          </div>

          <p className="hidden md:block text-sm text-gray-500">
            🔍 Search tutors by category
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-20">
          {steps.map((step) => (
            <div
              key={step.id}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              
              {/* IMAGE */}
              <div
                className={`flex justify-center ${
                  step.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative w-full max-w-md">
                  
                  {/* STEP NUMBER */}
                  <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 bg-[#D27722] text-white w-14 h-14 flex items-center justify-center rounded-lg text-xl font-bold shadow-lg z-10">
                    {step.id}
                  </div>

                  <img
                    src={step.img}
                    alt="step"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div
                className={`${step.reverse ? "md:order-1" : "md:order-2"}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 mb-4">
                  {step.desc}
                </p>

                {step.id === 1 && (
                  <button className="bg-[#D27722] text-white px-5 py-2 rounded-md hover:bg-[#b8641d] transition">
                    Browse Tutors
                  </button>
                )}

                {step.id === 3 && (
                  <button className="bg-[#D27722] text-white px-5 py-2 rounded-md hover:bg-[#b8641d] transition">
                    Sign up for free
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM CARD */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white border border-[#D27722]/30 rounded-xl p-6 text-center max-w-md shadow-sm relative">
            
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D27722] text-white w-15 h-15 flex items-center justify-center rounded-full shadow-md">
              💰
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-2">
              Money-back guarantee
            </h4>
            <p className="text-gray-500 text-sm">
            We believe you'll enjoy your first cooking lesson. However,
             we've got your back if anything goes differently than
              expected. Our money-back guarantee ensures you can take
               the first step with complete confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;