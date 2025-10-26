import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg m-10 p-4 sm:p-6 bg-white rounded-3xl shadow-2xl space-y-3 mx-auto flex flex-col justify-center items-center font-mono">
      <h2 className=" text-3xl sm:text-4xl font-semibold text-center">
        Color Picker
      </h2>
      <div
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-3xl border-2 border-black shadow-lg bg-white"
        style={{ backgroundColor: color }}
      ></div>
      <p className=" text-md font-lightbold ">Selected Color : {color}</p>
      <label className=" text-md sm:text-md font-lightbold">
        Select a Color:
      </label>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        className="w-20 h-9 border-2 rounded px-1"
      />
    </div>
  );
};

export default ColorPicker;
