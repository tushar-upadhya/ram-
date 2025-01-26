"use client";

import React from "react";

interface CallToActionProps {
  badgeText: string;
  title: string;
  description: string;
  containerStyle?: string;
  badgeStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const CTACard: React.FC<CallToActionProps> = ({
  badgeText,
  title,
  description,
  containerStyle = "text-center bg-[#0F0D0E]",
  badgeStyle = "mb-4 inline-block px-3 py-1 text-xs font-medium text-white bg-transparent rounded-md",
  titleStyle = "text-xl mt-3 font-bold text-[#F9F4DA]",
  descriptionStyle = "mt-2 text-sm text-[#F9F4DA]/50",
}) => {
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
