import React from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
  return (
    <Link to={`/category/${props.title}`}>
      {console.log(props.title)}
      <div className="shadow-2xl grid__category hover:cursor-pointer ">
        <img
          className="hover:grayscale-0  object-cover rounded img__category row-start-1  col-start-1 col-end-4 row-end-4"
          src={props.image}
          alt=""
        />
        <p class="uppercase   ease-in-out duration-500 hover:text-primary-blue  font-main text-5xl  z-50 font-bold col-start-2 row-start-2 absolute__text">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
