import CTACard from "@/components/cta-card/CTACard";
import Hero from "@/components/hero/Hero";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero
        title="Transform Your Business with Our All-in-One Solution"
        description="Transform the way you manage your business with our user-friendly software. Designed to simplify operations, our system is packed with features that make your work easier, faster, and more efficient."
        buttonText="Book a Demo"
        // onButtonClick={handleButtonClick}
      />

      <CTACard
        badgeText="TURBOBUSINESS"
        title="Ready to transform your business?"
        description="Get started with Octanics today and see the difference!"
        badgeStyle="text-[#231F20] bg-[#FC7428] text-sm sm:text-base p-1 px-2 font-semibold rounded-full"
      />
    </div>
  );
};

export default Home;
