import React, { useState, useContext, createContext } from "react";

let Context = createContext({
  color: "grey",
  setColor: () => {},
});

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = useContext(Context);

  const handleClick = (e) => {
    setColor(e.target.name);
  };

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          name={color}
          style={{ backgroundColor: color }}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

function Pixel() {
  // using color here from useContext so we know what color the user selected 

  const { color } = useContext(Context);
  const [pixelColor, setPixelColor] = useState("grey");
  // we make a pixelColor state var and setPixelColor func so 
  // we dont set the entire paint color again we only want to set a
  // specific div 
  // we assign the background color to pixel color so we set only one div a color


  const handleClick = () => {
    setPixelColor(color);
  };

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
      onClick={handleClick}
    />
  );
}

function Pixels() {
  const pixels = [];

  for (let i = 0; i < 100; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  let [color, setColor] = useState("grey");

  return (
    <div>
      {/* in the value prop the setColor prop is now the function that updates state 
      so its no longer the empty function from createContext
      */}
      <Context.Provider
        value={{
          color,
          setColor,
        }}
      >
        <ColorPicker />
        <Pixels />
      </Context.Provider>
    </div>
  );
}

/**
 *  <Context.Provider
        value={{
          color: color,
          setColor: (color) => {
            setColor(() => color)
          },
        }}
      >
        <ColorPicker />
        <Pixels />
      </Context.Provider>
 */
