import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SmPhotoCard from '../../components/SmPhotoCard/SmPhotoCard';

function Photos() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=30&orientation=portrait&client_id=pXQG7S0yyYvyctXQIo4MiwJ9YJz0Ih4xsUdmCv3z3Ow`
        );

        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    getImages().then((data) => {
      setImages(data.sort((a, b) => b.likes - a.likes));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="px-8 flex flex-col gap-10 items-center justify-center w-full">
        <h1 className="z-10 max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-5xl text-center">
          <span className="text-primary-blue uppercase">Suggested for you</span>
        </h1>

        {/* API CALL  */}
        <div className="flex flex-wrap gap-10 px-20 items-center justify-center">
          {images.map((item) => (
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
              profileMode={false}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Photos;
