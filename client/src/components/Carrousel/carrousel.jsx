import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'flowbite-react';
import Stats from '../Stats/Stats';
import { fetchBaner } from '../../redux/Reducer/BannerHome';

const Carrousel = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banner.banners);
  const status = useSelector((state) => state.banner.status);
  const error = useSelector((state) => state.banner.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBaner());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-[700] w-full bg-slate-400 mini:h-[901px]">
      <video className="absolute left-0 xl:h-[902px] md:h-[902px] lg:h-[902px] sm:h-[714px] phone:h-[914px] mini:h-[914px] w-full object-cover" autoPlay loop muted>
        <source src="https://cgsbrasil.com/wp-content/uploads/2024/08/Recife_Expo_Center_v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Carousel slideInterval={2000}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex items-center justify-center h-full mt-20">
            <div className="h-[600px] w-full p-8 rounded-lg shadow-lg">
              <h1 className={`${banner.gradient} bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-center`}>
                {banner.Title}
                <span className="sm:block text-center">{banner.SubTitle}</span>
              </h1>
              <div className='flex justify-center text-white'>
                <p className="mt-4 max-w-xl sm:text-xl/relaxed text-center">
                  {banner.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded-xl border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto phone:w-60 phone:text-[12px] phone:text-nowrap"
                  href={banner.BotonLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {banner.BotonText}
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