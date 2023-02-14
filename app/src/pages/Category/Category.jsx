import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import PhotoCard from '../../components/PhotoCard/PhotoCard';
import SmPhotoCard from '../../components/SmPhotoCard/SmPhotoCard';
import { useParams } from 'react-router-dom';

export default function Category() {
  const [currentCategory, setCurrentCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { title } = useParams();

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${title}&per_page=30&client_id=pXQG7S0yyYvyctXQIo4MiwJ9YJz0Ih4xsUdmCv3z3Ow`
        );
        const data = await response.json();

        return data;
      } catch (err) {
        console.log(err);
      }
    };

    getPhotos().then((data) => {
      setCurrentCategory(data.results.sort((a, b) => b.likes - a.likes));
      setLoading(false);
    });
  }, []);

  if (loading) {
    // loading skeleton
    return <div>loading pa ako eh</div>;
  }

  return (
    <>
      <Navbar />
      <div className="px-8 flex flex-col gap-10 items-center justify-center w-full mt-14">
        <h2 className="z-10 row-start-3 col-span-3 md:text-5xl max-w-desk md:px-20 uppercase font-bold font-main text-2xl text-center">
          <span className="text-primary-blue"> {title} </span>PHOTOS
        </h2>
        <div className="flex flex-wrap gap-10 px-20 items-center justify-center">
          {currentCategory.map((item) => (
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
      </div>
      <Footer />
    </>
  );
}
