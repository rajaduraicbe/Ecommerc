import React from 'react';
import ChefIcon from '../../assets/Landing/cheficon.png';
import PiggyIcon from '../../assets/Landing/saveicon.png';
import AwardIcon from '../../assets/Landing/cookingicon.png';

const Benefits = () => {
  const benefitsData = [
    {
      icon:ChefIcon,  
      title: "Expert Chefs",
      description: "Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.",
      
    },
    {
      icon:PiggyIcon,  
      title: "Save Time and Money",
      description: "Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.",
      // icon: PiggyIcon, // 2. Assign your imported icon here
    },
    {
      icon:AwardIcon,  
      title: "Accessible Cooking",
      description: "Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.",
      // icon: AwardIcon, // 3. Assign your imported icon here
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 relative inline-block">
            Our Unique Benefits
            <span className="absolute -top-3 -right-6 text-[#E08E45] opacity-40 text-3xl font-serif">''</span>
          </h2>
          <p className="hidden md:block text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Experience the perks of learning and teaching cooking on our platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-center lg:max-w-7xl mx-auto md:gap-8 md:max-w-[585px]">
          {benefitsData.map((benefit, index) => (
            <React.Fragment key={index}>
              {/* Benefit Card */}
              <div className="flex-1 flex flex-col items-center px-4 md:px-10 mb-16 md:mb-0">
                
                {/* Orange Circle with Icon */}
                <div>
                   <img src={benefit.icon} alt={benefit.title} className="w-25 h-25 object-contain" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-5">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px] md:text-base md:max-w-[585px]">
                  {benefit.description}
                </p>
              </div>

              {/* Vertical Divider Line (Visible between items on desktop) */}
              {index < benefitsData.length - 1 && (
                <div className="hidden md:hidden lg:block w-[1px] h-[42px] bg-[#FFDBB8] self-center opacity-60 mt-10"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
