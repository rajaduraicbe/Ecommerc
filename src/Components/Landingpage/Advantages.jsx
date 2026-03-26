import React from "react";
import BenefitsImg from "../../assets/Advantages_&_Howitswork/Images/benefits.png";
import advimg1 from "../../assets/Advantages_&_Howitswork/Icons/advimg1.png";
import advimg2 from "../../assets/Advantages_&_Howitswork/Icons/advimg2.png";
import advimg3 from "../../assets/Advantages_&_Howitswork/Icons/advimg3.png";


const advantages = [
  {
    title: "Diverse Range of Classes",
    desc: "Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.",
    icon: advimg1,
  },
  {
    title: "Opportunity to Teach",
    desc: "Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.",
    icon: advimg2,
  },
  {
    title: "Interactive Lessons",
    desc: "Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.",
    icon: advimg3,
  },
];

const AdvantagesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="w-full mt-8 lg:mt-12 flex justify-center">
          <img
            src={BenefitsImg}
            alt="Cooking"
            className="w-[90%] lg:w-[85%] object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Other Advantages
          </h2>

          <div className="space-y-4">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-orange-200 rounded-xl p-4 md:p-5 bg-white hover:shadow-md transition"
              >
                
                {/* ICON */}
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvantagesSection;
