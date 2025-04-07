import React from "react";
import { cn } from "../../lib/utils";
import { Marquee } from "../magicui/marquee";
import { TextAnimate } from "../magicui/text-animate";

const reviews = [
  { name: "Jack", username: "@jack", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/john" },
  { name: "Jane", username: "@jane", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny", username: "@jenny", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jenny" },
  { name: "James", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className={cn("relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-gray-700 bg-black text-white hover:bg-gray-900")}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full border border-gray-500" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-16">
      {/* Heading Wrapper to Fix Overlap */}
      <div className="relative z-10 mb-6 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-[greenyellow] mb-10 uppercase tracking-widest">
      <TextAnimate animation="blurInUp" by="character" duration={2}>Testimonials</TextAnimate>
      </h1>
      </div>

      {/* Marquee Rows */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Background Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
};

export default MarqueeDemo;
