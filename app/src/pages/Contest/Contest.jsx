import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
function Contest() {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`
  );
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentMonthString, setCurrentMonthString] = useState();
  const [currentYearString, setCurrentYearString] = useState();

  const handleChange = (e) => {
    setCurrentMonth(e.target.value);
  };

  useEffect(() => {
    const dateParts = currentMonth.split('-');
    const year = dateParts[0];
    const month = parseInt(dateParts[1]);

    const date = new Date(year, month - 1);

    const monthString = date.toLocaleString('default', { month: 'long' });
    const yearString = date.getFullYear();

    setCurrentMonthString(monthString);
    setCurrentYearString(yearString);

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
  }, [currentMonth]);

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
      {images.map((img, index) => console.log(img.likes, ' ', index))}
      <Navbar />
      <div className="px-8 flex flex-col gap-10 items-center justify-center w-full">
        <h1 className=" uppercase z-10 max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-5xl text-center">
          <span className="text-primary-blue">{currentMonthString} </span>
          {currentYearString}
        </h1>

        <input
          className="accent-primary-blue px-4 py-2 rounded-lg"
          type="month"
          name=""
          id="monthPicker"
          min="2020-01"
          max="2023-02"
          value={currentMonth}
          onChange={handleChange}
        />

        {/* api here     */}
        {images.map((pic, index) => (
          <PhotoCard
            // category={pic.category}
            image={pic.urls.regular}
            title={pic.alt_description}
            // description={pic.}
            likes={pic.likes}
            name={pic.user.username}
            photographer={pic.user.profile_image.large}
            index={index + 1}
            // profileLink={pic.user.links.html}
          />
        ))}

        {/* ADD LIMIT */}
      </div>

      <Footer />
    </>
  );
}

export default Contest;
