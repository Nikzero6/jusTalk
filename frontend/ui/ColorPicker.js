import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ htmlFor, title, id, colorValue, setColorValue }) => {
  const trackColorChange = (e) => {
    // if (/^#[0-9A-F]{6}$/i.test(e.target.value))
      setColorValue(e.target.value, id);
  };
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-md font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="flex space-x-2 bg-white mt-1 items-center col-span-6 border border-gray-300 w-full shadow-sm sm:text-sm  rounded-md">
        <div className="flex items-center p-2 border-r">
          <input
            type="color"
            name={htmlFor}
            id={htmlFor}
            className={styles.colorInput}
            value={colorValue}
            onChange={trackColorChange}
          />
          <ChevronDownIcon className="w-6 h-4" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name={htmlFor}
            onChange={trackColorChange}
            value={colorValue}
            className={styles.pureInput}
          />
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
