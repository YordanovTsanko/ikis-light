import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchImages } from "../../features/imagesSlice";
import ImageUploader from "../../components/main/ImageUploader";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuCross } from "react-icons/lu";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.images);
  const [addProduct, setAddProduct] = useState(false);

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
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    slidesPerRow: 2,
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center"
    >
      <style>
        {`
          .slick-slider {
            margin: 0 auto;
          }
        
          @media screen and (min-width: 767px) {
            .slick-slider {
              max-width: 90%;
            }
          }
        
          .slick-prev:before, .slick-next:before {
            color: red !important;
            font-size: 35px !important;
            
          @media screen and (max-width: 767px) {
            font-size: 25px !important;
          }
          }
        
          .slick-prev {
            left: -40px !important;
          }
        
          @media screen and (max-width: 767px) {
            .slick-prev {
              left: -30px !important;
            }
        
            .slick-next {
              right: -25px !important;
            }
          }
        `}
      </style>

      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-2">
          Търсене на продукт с AI помощ
        </h2>
        <h4 className="text-md text-primary opacity-75">
          Интелигентни препоръки, съобразени с вашите нужди
        </h4>
      </div>
      <div className="flex flex-col w-full items-end mr-12 md:mr-0 md:max-w-[600px] mb-4">
        {!addProduct ? (
          <div
            className="flex text-white items-center justify-center bg-primary rounded-lg px-2 py-1 gap-2 cursor-pointer"
            onClick={() => setAddProduct(true)}
          >
            <LuCross className="mt-[4px]" />{" "}
            <p className="mb-[1px]">Добавяне на продукт</p>
          </div>
        ) : (
          <div
            className="flex text-white items-center justify-center bg-primary rounded-lg px-2 py-1 gap-2 cursor-pointer"
            onClick={() => setAddProduct(false)}
          >
            <LuCross className="mt-[4px]" />{" "}
            <p className="mb-[1px]">Търсене на продукт</p>
          </div>
        )}
      </div>
      <ImageUploader />
      {!addProduct ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="text-white bg-primary mt-3 px-10 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Търсене
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="text-white bg-primary mt-3 px-10 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Нов продукт
        </motion.button>
      )}
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
        <div className="w-full px-10 mt-4 mb-10">
          <Slider {...sliderSettings}>
            {list.map((image) => (
              <motion.div
                key={image.id}
                className="px-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      )}
    </motion.div>
  );
};

export default AdminDashboard;
