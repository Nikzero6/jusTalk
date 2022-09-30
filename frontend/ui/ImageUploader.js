import Image from "next/image";
import { TextInput } from "./Input";
import React, { useState } from "react";

const ImageUploader = ({ imageUrl, text, onImageChange }) => {
  const [imageSrc, setImageSrc] = useState(imageUrl);

  const handleImageChange = (input) => {
    setImageSrc(input.target.value);
    onImageChange(input);
  };

  return (
    <div className="">
      <label className="block text-sm font-medium text-gray-700">
        Upload Image
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center w-full">
          {!!imageSrc ? (
            <a href={imageSrc} rel="noreferrer" target="_blank">
              <img
                src={imageSrc}
              />
            </a>
          ) : (
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          <div className="text-sm text-gray-600">
            <div className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
              <div>Click to upload</div>
            </div>
          </div>
          <p className="text-xs text-gray-500">{text}</p>
        </div>
      </div>
      <div>
      <TextInput
          htmlFor="image-url"
          onChange={(e) => {setImageSrc(e.target.value)}}
          defaultValue = {imageSrc}
          value={imageSrc}
          />
      </div>
    </div>
  );
};

export default ImageUploader;
