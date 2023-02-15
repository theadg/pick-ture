import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import blob from '../../assets/blob.svg';
import { Link } from 'react-router-dom';
function PhotoCard(props) {
  const [likes, setLikes] = useState(props.likes);

  const [hasVoted, setHasVoted] = useState(false);
  const userVotes = useRef(null);
  const handleClick = () => {
    if (!hasVoted) {
      setLikes((prev) => prev + 1);
      setHasVoted(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasVoted(false);
    }
  };
  useEffect(() => {
    setLikes(props.likes);
  }, [props]);

  return (
    <AnimationOnScroll
      animatePreScroll={false}
      animateOnce={true}
      animateIn={
        props.index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'
      }
    >
      <div
        className={` img__card sm:flex-row flex flex-col items-center justify-center bg-card rounded-2xl p-5 shadow-2xl gap-4 relative`}
      >
        <div className="grid justify-items-center relative  ">
          <img
            // TODO: add image size
            className=" mx-auto hero__img rounded-xl w-4/5  shadow-xl  "
            src={props.image}
          />

          {/* element two */}
          {/*  */}

          <div className="bg-[#000]/50 hover:cursor-pointer w-contest hover:text-primary-blue flex justify-center items-center z-10 absolute bottom-0  w-inherit gap-3  px-5 py-2">
            <Link
              className="flex gap-4 items-center w-100"
              to={`/user/${props.name}`}
            >
              <img
                className="h-8 w-8 rounded-full object-cover "
                src={props.photographer}
                alt=""
              />
              <p class="font-sans font-bold">{props.name}</p>
            </Link>
          </div>
        </div>

        <div className="grid justify-items-center relative w-full">
          <h1 className="img__rank absolute left-4 z-10 text-min font-bold font-main row-auto text-yellow/60">
            {props.index}
          </h1>

          <img className="absolute md:block blob hidden" src={blob} alt="" />
          {/* <p className="z-10 hover:cursor-pointer hover:bg-primary-blue hover:text-primary-bg  ease-in duration-300  p-2 uppercase font-main border-primary-blue  border-solid border-2 w-min font-semibold text-xs  text-white rounded-full shadow-sm">
            {props.category}
          </p> */}
          <h2 className="sm:text-4xl z-10 capitalize max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-2xl text-center">
            {props.title}
          </h2>
          <p className="text-center text-sm px-6 flex z-10">
            {props.description}
          </p>
          <div
            ref={userVotes}
            onClick={handleClick}
            className="sm:text-2xl hover:cursor-pointer flex z-10 font-main font-bold items-center gap-2 justify-center text-primary-blue "
          >
            <FontAwesomeIcon icon={faHeart} className="fa-lg" />
            <p> {likes.toLocaleString()} </p>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default PhotoCard;
