import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  uploadImage,
  searchImage,
  clearSearchResults,
} from "../../features/imagesSlice";
import { logout } from "../../features/authSlice";
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (uploadFile) {
      dispatch(uploadImage(uploadFile));
      setUploadFile(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchFile) {
      dispatch(searchImage(searchFile));
    }
  };

  const handleClearSearch = () => {
    dispatch(clearSearchResults());
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-4">Търсене на подходящ продукт с помоща на AI.</h2>
        <h4 className="text-lg text-primary">някъкъв текс генериран от ай</h4>
      </div>
      <ImageUploader />

      <section>
        <h3>Списък с изображения</h3>
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
