import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ImUpload } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "./Loader";

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setUploading(true);
      const preview = URL.createObjectURL(selectedFile);
      setTimeout(() => {
        setFile(Object.assign(selectedFile, { preview }));
        setUploading(false);
      }, 2000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file.preview);
    };
  }, [file]);

  if (uploading) {
    return (
      <div className="px-28 py-24 border-2 border-dotted border-primary rounded-md flex flex-col justify-center items-center cursor-pointer">
        <Loader />
      </div>
    );
  }
  if (file) {
    return (
      <div className="relative flex justify-center items-center px-2 lg:px-0">
        <img
          src={file.preview}
          alt={file.name}
          className="w-96 h-96 object-cover rounded-md"
        />
        <div className="absolute top-2 lg:right-2 right-4 group">
          <AiOutlineClose
            onClick={() => setFile(null)}
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
            Плъзнете и пуснете изображения тук или кликнете, за да изберете
            файлове
          </p>
        )}
      </div>
    </section>
  );
};

export default ImageUploader;
