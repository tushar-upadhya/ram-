import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  containerStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  buttonStyle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  containerStyle = "h-screen flex items-center justify-center bg-[#0F0D0E]",
  titleStyle = "mb-6 text-xl font-extrabold tracking-tight leading-tight text-[#F9F4DA] md:text-4xl lg:text-5xl capitalize",
  descriptionStyle = "mb-8 text-base text-gray-400 lg:text-lg sm:px-8",
  buttonStyle = "flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#231F20] bg-[#FC7428] rounded-lg transition duration-200 hover:bg-[#FC7428]/90",
}) => {
  return (
    <section className={containerStyle}>
      <div className="py-8 px-4 mx-auto max-w-screen-lg text-center">
        <h1 className={titleStyle}>{title}</h1>
        <p className={descriptionStyle}>{description}</p>
        <div className="flex justify-center space-x-4">
          <Button onClick={onButtonClick} className={buttonStyle}>
            {buttonText}
            <MoveRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
