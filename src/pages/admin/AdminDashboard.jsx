import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchImages } from "../../features/imagesSlice";
import ImageUploader from "../../components/main/ImageUploader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("В процес на разработка !");
  };
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-2">
          Търсете продукти с помощта на AI
        </h2>
        <h4 className="text-md text-primary opacity-75">
          Интелигентни препоръки, съобразени с вашите нужди
        </h4>
      </div>
      <ImageUploader />
      <button
        onClick={handleSearch}
        className="text-white bg-primary mt-4 px-10 py-2 rounded-lg hover:bg-red-700 hover:scale-105 transition duration-300"
      >
        Търсене
      </button>
      <h2 className="text-3xl font-bold mb-2 mt-10">Всички продукти</h2>

      {status === "loadingFetch" && (
        <div className="w-full flex justify-center items-center my-10">
          <div className="animate-pulse flex space-x-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-40 w-40 rounded"></div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 my-4">
          Грешка при зареждането на изображения: {error}
        </div>
      )}

      {status === "successFetch" && list.length > 0 && (
        <div className="w-full px-10 mt-4 mb-20">
          <Slider {...sliderSettings}>
            {list.map((image) => {
              console.log(image);
              return (
                <div key={image.id} className="px-2">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
