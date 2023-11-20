import React, { useState, useEffect } from 'react';

function Homepage() {

  function getImageFileNames() {
    const context = require.context('../images', false, /\.(jpg|jpeg|png|gif|webp)$/);
    const fileNames = context.keys().map((key) => key.replace('./', ''));
    return shuffleArray(fileNames);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const imageFileNames = getImageFileNames();

  const [artistIndices, setArtistIndices] = useState({firstImage: 0, secondImage: 1, thirdImage: 3});
  const [currentPosition, setCurrentPosition] = useState(0);

  
  
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prevPosition) => {
        let newPosition = prevPosition + 1;
        if (newPosition >= imageFileNames.length) {
     
          newPosition = 0;
          setArtistIndices((artistIndices) => {
            const shuffledImages = shuffleArray(imageFileNames);
            return {
              firstImage: newPosition,
              secondImage: (newPosition + 1) % shuffledImages.length,
              thirdImage: (newPosition + 2) % shuffledImages.length,
            };
          });
        } else {
          setArtistIndices((artistIndices) => ({
            firstImage: newPosition,
            secondImage: (newPosition + 1) % imageFileNames.length,
            thirdImage: (newPosition + 2) % imageFileNames.length,
          }));
        }
        return newPosition;
      });
    }, 400);
  
    return () => clearInterval(interval);
  }, [imageFileNames]);



  

  return (
    <article className='flex w-11/12 justify-between items-center'>
      <section className='w-6/12'>
        <h1 className='font-bold text-white text-160 text-left leading-normal line-height mb-12'>
          ja<span className='text-yellow'>m</span>
          <span className='text-green'>m</span>
          <br />
          <span className='text-blue'>m</span>ing.
        </h1>
        <h2 className='text-base ml-2'>
          Jammming: Your Spotify sidekick for personalized stats, curated playlists, and effortless music enjoyment. Explore your tunes like never before!
        </h2>
        <button className='mt-6 ml-2 orange-bg p-3 rounded-xl text-xl w-52 font-bold'>Connect to Spotify</button>
      </section>
      <section className='w-6/12 h-full flex flex-wrap flex-row-reverse gap-0 '>
        <figure className='pc:w-72 pc:h-72 w-52 h-52 '>
          <div className='absolute pc:w-72 pc:h-72 w-52 h-52 bg-yellow opacity-50'></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices.firstImage]}`)}
            alt={`Artist 1`}
          />
        </figure>
        <figure className='pc:w-72 pc:h-72 w-52 h-52 '>
          <div className='absolute pc:w-72 pc:h-72 bg-green opacity-50 w-52 h-52 '></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices.secondImage]}`)}
            alt={`Artist 2`}
          />
        </figure>
        <figure className='pc:w-72 pc:h-72 w-52 h-52 '>
          <div className='absolute pc:w-72 pc:h-72 bg-blue opacity-50 w-52 h-52'></div>
          <img
            className='w-full h-full object-cover'
            src={require(`../images/${imageFileNames[artistIndices.thirdImage]}`)}
            alt={`Artist 3`}
          />
        </figure>
      </section>
    </article>
  );
}

export default Homepage;
