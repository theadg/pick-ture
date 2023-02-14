import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

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
    });

    getUserImages().then((data) => {
      setUserImages(data);
    });
  }, []);

  if (!userProfile && !userImages) {
    return <h1>loading hehe</h1>;
  }

  return (
    <>
      {console.log(userProfile)}
      <Navbar />
      {/* RENDER UI HERE */}
      {/* NAME */}
      <div className="">
        <p>{`${userProfile.first_name} ${userProfile.last_name} `}</p>
      </div>
      {/* BIO    */}
      <p>{userProfile.bio}</p>
      <img src={userProfile.profile_image.large} alt="" />
      <Footer />
    </>
  );
}

export default Profile;
