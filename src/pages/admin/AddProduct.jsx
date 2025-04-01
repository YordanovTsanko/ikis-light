import React, { useState } from "react";
import ImageUploader from "../../components/main/ImageUploader";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../features/imagesSlice";

const AddProduct = () => {
  const [imageFile, setImageFile] = useState(null);
  const { statusUpload, errorUpload } = useSelector((state) => state.images);

  const dispatch = useDispatch();

  const handleUpload = (e) => {
    e.preventDefault();
    try {
      dispatch(uploadImage(imageFile));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center md:max-w-[600px] my-10 mx-auto">
      <h2 className="text-3xl font-bold mb-4">Добавяне на продукт </h2>
      <ImageUploader imageFile={imageFile} setImageFile={setImageFile} />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleUpload}
        disabled={statusUpload === "loading"}
        className="text-white bg-primary mt-3 px-10 py-2 rounded-lg hover:bg-red-700 transition duration-300"
      >
        {statusUpload === "loading" ? "Зареждане" : "Добавяне"}
      </motion.button>
      {statusUpload === "succeeded" && (
        <div className="text-green-500 my-4">Успешно добавена снимка</div>
      )}
      {errorUpload && <div className="text-red-500 my-4">{errorUpload}</div>}
    </div>
  );
};

export default AddProduct;
