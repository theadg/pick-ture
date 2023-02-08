import React from 'react';
import { categories } from './categories';
import Category from '../../components/Category/Category';
function Explore() {
  return (
    <>
      <div className="px-8 flex flex-col gap-10 items-center justify-center w-full ">
        <h1 className="uppercase z-10 max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-3xl text-center">
          <span className="text-primary-blue">Explore</span> Categories
        </h1>

        {/* img */}

        <div className="flex flex-wrap gap-10 px-20 items-center justify-center">
          {categories.map((categ) => (
            <Category title={categ.title} image={categ.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
