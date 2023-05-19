import React, { useState, useEffect } from "react";

export default function DogPics() {
  const [dogImage, setDogImage] = useState("");
  // API: https://dog.ceo/dog-api/

  
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const doggie = await response.json();
        return doggie.message
      } catch (error) {
        console.log("Could not fetch image");
      }
    };

    useEffect(() => {
     fetchDogImage().then(image => setDogImage(image))
    }, [])

  const handleClick = async (e) => {
   setDogImage(await fetchDogImage())
  };

  return (
    <div className="dog-pics">
      <img src={dogImage} />
      <button onClick={handleClick}>🐶</button>
    </div>
  );
}
