import React, { useState, useEffect } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { MdLocationOn } from 'react-icons/md';
import SmPhotoCard from '../../components/SmPhotoCard/SmPhotoCard';
function Profile() {
  const [userProfile, setUserProfile] = useState([]);
  const [userImages, setUserImages] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/users/${name}?&client_id=pXQG7S0yyYvyctXQIo4MiwJ9YJz0Ih4xsUdmCv3z3Ow`
        );
        const data = await response.json();

        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    const getUserImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/users/${name}/photos?&=order_by=latest&per_page=30&client_id=pXQG7S0yyYvyctXQIo4MiwJ9YJz0Ih4xsUdmCv3z3Ow`
        );
        const data = await response.json();
        console.log('USER IMAGES HERE: ', data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    getUserProfile().then((data) => {
      setUserProfile(data);

      getUserImages().then((data) => {
        setUserImages(data.sort((a, b) => b.likes - a.likes));
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return <h1>loading hehe</h1>;
  }

  return (
    <>
      {console.log(userProfile)}
      <Navbar />
      {/* RENDER UI HERE */}

      <div className="flex  items-center justify-center gap-6 flex-col w-full pb-10 mt-10">
        {/* HEADER */}
        <div className="flex  items-center justify-center gap-6 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <img
              className="w-28 rounded-full"
              src={userProfile.profile_image.large}
              alt=""
            />
          </div>

          {/* NAME */}
          <div className="flex gap-6 flex-col ">
            <div className="flex gap-2 flex-col">
              <p className="font-main text-3xl uppercase font-bold">
                <span className="text-primary-blue">
                  {' '}
                  {userProfile.first_name}
                </span>{' '}
                {userProfile.last_name}
              </p>
              <div className="flex justify-between">
                <p>@{userProfile.username}</p>
              </div>
              <div className="flex items-center gap-1">
                <MdLocationOn></MdLocationOn>
                {userProfile.location}
              </div>
            </div>
          </div>
        </div>
        {/* BIO */}
        <p class="w-4/5 text-justify">{userProfile.bio}</p>

        {/* STATS */}
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center">
            <p className="font-main text-2xl font-bold text-primary-blue">
              {userProfile.total_photos}
            </p>
            <p className="font-sans">PHOTOS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-main text-2xl font-bold text-primary-blue">
              {userProfile.followers_count}
            </p>
            <p className="font-sans">FOLLOWERS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-main text-2xl font-bold text-primary-blue">
              {userProfile.downloads.toLocaleString()}
            </p>
            <p className="font-sans">DOWNLOADS</p>
          </div>
        </div>

        <hr className="border-t-4 border-primary-blue w-3/4" />
      </div>

      {/* bio */}

      {/* BIO    */}
      {/* LOCATION */}

      {/* IMAGES */}
      <div className="flex flex-wrap gap-10 px-20 items-center justify-center">
        {userImages.map((item) => (
          <SmPhotoCard
            key={item.id}
            profileImage={item.user.profile_image.large}
            image={item.urls.regular}
            likes={item.likes}
            name={`${item.user.first_name} ${
              item.user.last_name ? item.user.last_name : ''
            }`}
            username={item.user.username}
            imageLink={item.links.html}
            profileMode={true}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
