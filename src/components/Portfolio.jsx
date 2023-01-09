import React from "react";
import arryDestruct from "../assets/portfolio/arrayDestruct.jpg";
import instalNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import Portfolioo from "../assets/portfolio/Portfolio-img.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
const Portfolio = () => {
  let portfolio = [
    {
      id: 1,
      src: arryDestruct,
      demo: "",
      code:""
    },
    {
      id: 2,
      src: instalNode,
      demo: "",
      code:""
    },
    {
      id: 3,
      src: navbar,
      demo: "",
      code:""
    },
    {
      id: 4,
      src: Portfolioo,
      demo: "",
      code:""
    },
    {
      id: 5,
      src: reactWeather,
      demo: "",
      code:""
    },
    {
      id: 6,
      src: Portfolioo,
      demo: "",
      code:""
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:w-full"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105 h-4/6 w-full"
              />
              <div className=" flex items-center justify-center">
                  <a href={demo} target="_blank" rel="noopener noreferrer " className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center" >Demo</a> 
                
                  <a href={code} target="_blank" rel="noopener noreferrer " className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center" >Code</a> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
