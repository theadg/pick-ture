import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// TODO: add on click events
/* 
    ONCLICKS:
        // 1. DONE: image
        // 2. ON GOING: author profileS
        // 3. DONE: like
*/

// TODO: fix image click
function SmPhotoCard(props) {
  const [votes, setVotes] = useState(props.likes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleClick = (e) => {
    if (!hasVoted) {
      setVotes((prev) => prev + 1);
      setHasVoted(true);
    } else {
      setVotes((prev) => prev - 1);
      setHasVoted(false);
    }
    e.stopPropagation();
  };

  const imageClick = () => {
    window.open(props.imageLink, '_blank');
    console.log('naclick ako eh');
  };

  return (
    <>
      {console.log(props)}
      <div className="  grid justify-items-center relative  ">
        <a href={props.imageLink} target="_blank" rel="noopener noreferrer">
          <img
            className=" mx-auto img__category h shadow-2xl object-cover rounded img__category row-start-1  col-start-1 col-end-4 row-end-4"
            src={props.image}
          />
        </a>

        {/* element two */}
        {/*  */}
        <div
          onClick={imageClick}
          className=" w-inherit font-darken hover:cursor-pointer  flex justify-center items-center z-10 absolute bottom-0  w-inherit gap-3  px-5 py-2"
        >
          <Link
            to={`/user/${props.username}`}
            onClick={(e) => e.stopPropagation()}
          >
            <a className="flex items-center gap-2">
              <img
                className="h-8 w-8 rounded-full object-cover "
                src={props.profileImage}
                alt=""
              />

              {/* username */}
              <p className="font-sans font-bold hover:text-primary-blue">
                {/* {props.name} */}
                {props.username}
              </p>
            </a>
          </Link>
          {/* Like */}
          <p
            onClick={handleClick}
            className=" hover:cursor-pointer flex z-10 font-main font-bold items-center gap-2 justify-center text-primary-blue "
          >
            <FontAwesomeIcon icon={faHeart} className="fa-lg" />
            <p> {votes.toLocaleString()} </p>
          </p>
        </div>
      </div>

      {/* HERE */}
    </>
  );
}

export default SmPhotoCard;
