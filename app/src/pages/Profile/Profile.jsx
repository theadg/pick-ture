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
          `https://api.unsplash.com/users/${name}/photos?&client_id=pXQG7S0yyYvyctXQIo4MiwJ9YJz0Ih4xsUdmCv3z3Ow`
        );
        const data = await response.json();
        // console.log('USER IMAGES HERE: ', data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    getUserProfile().then((data) => {
      setUserProfile(data);

      getUserImages().then((data) => {
        setUserImages(data);
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
      {/* STAT PAGE */}
      <p>DOWNLOADS {userProfile.downloads}</p>
      <p>FOLLOWERS {userProfile.followers_count}</p>
      <p>PHOTOS {userProfile.total_photos}</p>

      {/* NAME */}
      <div className="">
        <p>{`${userProfile.first_name} ${userProfile.last_name} `}</p>
      </div>
      {/* BIO    */}
      <p>{userProfile.bio}</p>

      {/* IMAGE */}
      <img src={userProfile.profile_image.large} alt="" />

      {/* LOCATION */}
      <MdLocationOn />
      <p>{userProfile.location}</p>

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
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
