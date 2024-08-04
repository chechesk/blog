import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpeakers } from '../../redux/Reducer/NewsSpeakers';
import { Carousel } from 'flowbite-react';

export default function SpeakerModule() {
  const dispatch = useDispatch();
  const { speakers, loading, error } = useSelector((state) => state.speakers);
  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    dispatch(fetchSpeakers());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 350) { // mini
        setChunkSize(1);
      } else if (window.innerWidth < 480) { // phone
        setChunkSize(1);
      } else if (window.innerWidth < 640) { // sm
        setChunkSize(1);
      } else if (window.innerWidth < 768) { // md
        setChunkSize(2);
      } else if (window.innerWidth < 1024) { // lg
        setChunkSize(2);
      } else { // xl and above
        setChunkSize(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Function to chunk the array into smaller arrays of specified size
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const speakerChunks = chunkArray(speakers, chunkSize);

  return (
    <div className="flex justify-center">
      <div className="mini:h-[440px] phone:h-[440px] h-56 sm:h-64 xl:h-80 2xl:h-[440px] mx-2 phone:mx-4 sm:mx-8 lg:mx-16 xl:mx-24 bg-gray-400 rounded-xl w-full max-w-[1386px] items-center">
        <Carousel
          slideInterval={5000}
          pauseOnHover
          indicators
        >
          {speakerChunks.map((chunk, index) => (
            <div key={index} className="flex justify-center space-x-4 px-2">
              {chunk.map((speaker) => (
                <div key={speaker.id} className="flex flex-col p-4 rounded-lg shadow-md bg-white w-full max-w-[300px]">
                  <img
                    src={speaker.Image}
                    alt={`${speaker.Nombre} ${speaker.Apellido}`}
                    className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 xl:h-60 xl:w-60 2xl:h-64 2xl:w-64 object-cover rounded-xl mb-4 mx-auto transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className='h-[100px]'>
                    <h3 className="text-sm sm:text-md lg:text-lg font-semibold text-center">{speaker.Nombre} {speaker.Apellido}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">{speaker.Empresa}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-bold text-center">{speaker.Cargo}</p>
                    <div className='flex justify-between items-center w-full mt-2'>
                      <p className="text-xs sm:text-sm lg:text-md text-gray-600 font-bold">{speaker.Pais}</p>
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs sm:text-sm lg:text-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="#999999" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}