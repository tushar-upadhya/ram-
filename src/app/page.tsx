import CTACard from "@/components/cta-card/CTACard";
import Hero from "@/components/hero/Hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

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

      <div className="">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Home;
