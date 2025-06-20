import React from "react";
import HeroImage from "../assets/luka.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div
      name="home"
      className="text-white h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center pt-10 w-5/6 sm:w-4/5">
          <h2 className="text-3xl md:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className=" text-gray-500 my-4 max-w-md ">
           I have almost 2 years of experience in Front End development.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight size={20} className=" ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className=" rounded-2xl pt-6 mx-auto w-9/12 md:w-full sm:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
