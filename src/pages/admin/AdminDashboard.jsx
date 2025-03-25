import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  uploadImage,
  searchImage,
  clearSearchResults,
} from "../../features/imagesSlice";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../components/main/ImageUploader";

function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const images = useSelector((state) => state.images.list);
  const searchResults = useSelector((state) => state.images.searchResults);
  const [uploadFile, setUploadFile] = useState(null);
  const [searchFile, setSearchFile] = useState(null);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
   alert("Търсене...")
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
        className="text-white bg-primary mt-4 px-10 py-2 rounded-lg hover:bg-red-700   hover:scale-105 transition duration-300"
      >
        Търсене
      </button>

      <section className="mt-5">
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.url} alt={image.name} width="100" />
              <p>{image.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
