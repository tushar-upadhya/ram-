"use client";
interface CallToActionProps {
  badgeText: string;
  title: string;
  description: string;
  containerStyle?: string;
  badgeStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const CTACard = ({
  badgeText,
  title,
  description,
  containerStyle = "text-center -mt-10 bg-[#0F0D0E]",
  badgeStyle = "inline-block text-[min(3.5vw,2rem)]",
  titleStyle = "text-[min(3.5vw,1rem)] capitalize mt-3 font-medium text-[#F9F4DA]",
  descriptionStyle = "mt-2 text-[min(3.5vw,1rem)] capitalize text-[#F9F4DA]/50",
}: CallToActionProps) => {
  return (
    <section className={containerStyle}>
      <div className="max-w-2xl mx-auto container">
        <span className={badgeStyle}>{badgeText}</span>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descriptionStyle}>{description}</p>
      </div>
    </section>
  );
};

export default CTACard;
