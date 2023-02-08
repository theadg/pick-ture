import React, { useRef } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { photos } from './photoData';

// TODO: add image
// TODO: add animation
function Photos() {
  const inputVotes = useRef(null);

  const test = () => {
    console.log('hello world');
  };

  return (
    <>
      <div className="px-8 flex flex-col gap-10 items-center justify-center w-full">
        <h1 className="z-10 max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-3xl text-center">
          <span className="text-primary-blue">January</span> 2023
        </h1>

        {photos.map((pic) => (
          <PhotoCard
            category={pic.category}
            image={pic.image}
            title={pic.title}
            description={pic.description}
            votes={pic.votes}
            name={pic.name}
            photographer={pic.photographer}
            index={pic.index}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;