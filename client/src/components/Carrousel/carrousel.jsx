import React from 'react';
import { Carousel } from 'flowbite-react';
import Stats from '../Stats/Stats';

const cardData = [
  {
    "title": "Boost Your Productivity",
    "subtitle": "Achieve More With Less Effort",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
    "cta1": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "cta2": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "gradient": "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  },
  {
    "title": "Enhance Your Experience",
    "subtitle": "Grow Your Business",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
    "cta1": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "cta2": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "gradient": "bg-gradient-to-r from-pink-300 via-red-500 to-yellow-600"
  },
  {
    "title": "Unlock Your Potential",
    "subtitle": "Transform Your Life",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
    "cta1": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "cta2": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "gradient": "bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600"
  },
  {
    "title": "Innovate and Inspire",
    "subtitle": "Create Something Amazing",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
    "cta1": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "cta2": {
      "text": "Registro Gratuito XPO 360",
      "link": "#"
    },
    "gradient": "bg-gradient-to-r from-purple-300 via-indigo-500 to-blue-600"
  }
];

const Carrousel = () => {
  return (
    <div className="h-[700px] w-full bg-slate-400 mini:h-[901px]">
      <video className="absolute  left-0 xl:h-[902px] md:h-[902px] lg:h-[902px] sm:h-[714px] phone:h-[914px] mini:h-[914px] w-full object-cover" autoPlay loop muted>
        <source src="https://cgsbrasil.com/wp-content/uploads/2024/08/Recife_Expo_Center_v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Carousel slideInterval={2000}>
        {cardData.map((card, index) => (
          <div key={index} className="flex items-center justify-center h-full mt-20 ">
            <div className=" h-[600px] w-full p-8  rounded-lg shadow-lg ">
              <h1 className={`${card.gradient} bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-center  `}>
                {card.title}
                <span className="sm:block text-center "> {card.subtitle} </span>
              </h1>
              <div className='flex justify-center text-white'>

              <p className="mt-4  max-w-xl sm:text-xl/relaxed text-center">
                {card.description}
              </p>
                </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded-xl border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto phone:w-60 phone:text-[12px] phone:text-nowrap	"
                  href={card.cta1.link}
                >
                  {card.cta1.text}
                </a>
               
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Stats />
    </div>
  );
};

export default Carrousel;