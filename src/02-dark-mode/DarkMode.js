import React, { useState } from "react";
export default function DarkMode() {
  let [mode, setMode] = useState(true)

  const handleClick = (e) => {
    if (e.target.name === "light-mode") {
      setMode(true)
    } else {
      setMode(false)
    }
  };

  return (
    <div className={mode ? "page" : "page dark-mode"}>
      <button
        onClick={handleClick}
        name="dark-mode"
        className="dark-mode-button"
      >
        Dark Mode
      </button>
      <button
        onClick={handleClick}
        name="light-mode"
        className="light-mode-button"
      >
        Light Mode
      </button>
    </div>
  );
}
