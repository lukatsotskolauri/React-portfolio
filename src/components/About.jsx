import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          My name is Luka, originally from Georgia, currently I’m 16 years old,
          right now I’m learning React and Tailwind at the same time and this
          Portfolio is build with using both tools, so what’s the purpose of me
          doing this portfolio now? Simple! I want to get hired and get as much
          experience as possible.
        </p>
        <br />
        <p className="text-xl">
          Let’s talk about how I started coding, firstly I was about in 6-th
          grade when I first saw tag “HTML” it was on my IT lesson and I was so
          surprised and impressed, from that time I had interest in coding and
          finally when I was about 14-15, I rolled in a “IT Academy Step
          Georgia” where I learned web development and now, I’m graduating it
          this year.
        </p>
      </div>
    </div>
  );
};

export default About;
