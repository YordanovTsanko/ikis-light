import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ImUpload } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "./Loader";

const ImageUploader = ({ imageFile, setImageFile }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      // Clear any previous error and proceed with the file update.
      setError(null);
      setUploading(true);
      const preview = URL.createObjectURL(selectedFile);
      // Immediately update the image file state without a timeout.
      setImageFile(Object.assign(selectedFile, { preview }));
      setUploading(false);
    }
  }, [setImageFile]);

  const onDropRejected = useCallback((fileRejections) => {
    // Set an error message when file type is not accepted.
    setError("Невалиден тип на файл. Моля, качете само PNG или JPG изображения.");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    multiple: false,
  });

  useEffect(() => {
    return () => {
      if (imageFile?.preview) {
        URL.revokeObjectURL(imageFile.preview);
      }
    };
  }, [imageFile]);

  if (uploading) {
    return (
      <div className="px-28 py-24 border-2 border-dotted border-primary rounded-md flex flex-col justify-center items-center cursor-pointer">
        <Loader />
      </div>
    );
  }

  if (imageFile) {
    return (
      <div className="relative flex justify-center items-center px-2 lg:px-0 border-2 border-dotted border-primary rounded-lg">
        <img
          src={imageFile.preview}
          alt={imageFile.name}
          className="w-96 h-96 object-cover rounded-md"
        />
        <div className="absolute top-2 lg:right-2 right-4 group">
          <AiOutlineClose
            onClick={() => setImageFile(null)}
            className="text-white bg-black rounded-full p-1 cursor-pointer"
            size={24}
          />
          <span className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
            Изтрии
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="px-2 lg:px-0">
      {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
      <div
        {...getRootProps({
          className:
            "px-12 md:px-28 py-24 border-2 border-dotted border-primary rounded-md flex flex-col justify-center items-center cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        <ImUpload size={58} className="opacity-60 mb-5" />
        {isDragActive ? (
          <p className="opacity-60 max-w-sm text-center">
            Пуснете изображенито тук...
          </p>
        ) : (
          <p className="opacity-60 max-w-auto lg:max-w-sm text-center">
            Плъзнете и пуснете изображения тук или кликнете, за да изберете файл
          </p>
        )}
      </div>
    </section>
  );
};

export default ImageUploader;
