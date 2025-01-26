import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({ title, description, buttonText, onButtonClick }: HeroProps) => {
  return (
    <section className="h-screen -mt-14 flex items-center justify-center bg-[#0F0D0E]">
      <div className="py-8 px-4 mx-auto max-w-screen-lg text-center">
        <h1 className="font-extrabold tracking-tight leading-tight text-[#F9F4DA] text-[min(3.5vw,2rem)] capitalize">
          {title}
        </h1>
        <p className="mb-8 text-base text-gray-400 lg:text-lg sm:px-8">
          {description}
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onButtonClick}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#231F20] bg-[#FC7428] rounded-lg transition duration-200 hover:bg-[#FC7428]/90"
          >
            {buttonText}
            <MoveRight size={18} className="animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
