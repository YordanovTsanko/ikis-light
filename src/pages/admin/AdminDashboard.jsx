import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchImages, uploadImage } from "../../features/imagesSlice";
import ImageUploader from "../../components/main/ImageUploader";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuCross, LuSearch } from "react-icons/lu";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { list, status, statusUpload, error, errorUpload } = useSelector(
    (state) => state.images
  );
  const [addProduct, setAddProduct] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("В процес на разработка !");
  };

  const handleUpload = (e) => {
    e.preventDefault();
    dispatch(uploadImage(imageFile));
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <div
          className="flex text-white items-center justify-center bg-primary rounded-lg px-2 py-1 gap-2 cursor-pointer hover:bg-red-600 hover:scale-105 transition duration-300"
          onClick={() => setAddProduct((prev) => !prev)}
        >
          {addProduct ? (
            <LuCross className="mt-[4px]" />
          ) : (
            <LuSearch className="mt-[4px]" />
          )}
          <p className="mb-[1px]">
            {addProduct ? "Добавяне на продукт" : "Търсене на продукт"}
          </p>
        </div>
      </div>
      <ImageUploader imageFile={imageFile} setImageFile={setImageFile} />
      {errorUpload && <div className="text-red-500 my-4">{errorUpload}</div>}
      {statusUpload === "succeeded" && (
        <div className="text-green-500 my-4">Успешно добавена снимка</div>
      )}
      {!addProduct ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          disabled={statusUpload === "loading"}
          className="text-white bg-primary mt-3 px-10 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Търсене
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={statusUpload === "loading"}
          className="text-white bg-primary mt-3 px-10 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          {statusUpload === "loading" ? "Зареждане" : "Добавяне"}
        </motion.button>
      )}
      <h2 className="text-3xl font-bold mb-2 mt-10">Всички продукти</h2>

      {status === "loading" && (
        <div className="w-full flex justify-center items-center my-10">
          <div className="animate-pulse flex space-x-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-40 w-40 rounded"></div>
            ))}
          </div>
        </div>
      )}

      {status === "failed" && <div className="text-red-500 my-4">{error}</div>}

      {status === "succeeded" && list.length > 0 && (
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
                  src={`data:image/jpeg;base64,${image.imageData}`}
                  alt={image.imageName}
                  className="w-full h-64 object-cover rounded-lg"
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
