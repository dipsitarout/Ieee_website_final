import React, { useState, memo } from "react";
import classNames from "classnames"; // Use `classnames` package for styling
import { HyperText } from "../magicui/hyper-text";
import { TextAnimate } from "../magicui/text-animate";

// Card Component
const Card = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={classNames(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div
      className={classNames(
        "absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300 text-left", // Added text-left for alignment
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Event Name */}
      <div className="text-2xl font-semibold text-white">{card.title}</div>
      {/* Event Date */}
      <div className="text-sm text-gray-300 mt-1">{card.date}</div>
      {/* Venue */}
     
      {/* Short Description */}
      <p className="text-xs text-gray-400 mt-2">{card.description}</p>
    </div>
  </div>
));

Card.displayName = "Card";

// FocusCards Component
const FocusCards = ({ cards }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-10">
      {/* Gallery Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[greenyellow]">
      <TextAnimate animation="blurInUp" by="character" duration={2}>EVENT GALLERY</TextAnimate>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
};

export default FocusCards;
