import React, { useState, useEffect } from 'react';
import axios from 'axios';
//API key
const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {
  const [gif, setGif] = useState('');
  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc)
  }

  //COMPONENT DID MOUNT  ... first render
  useEffect(() => {
    fetchData()
  }, []);

  const handleClick = () => {
    fetchData()
  };

  return (
    <div className='ct-container '>
      <div>
        <h1>Random Gif</h1>
        <img width="400" height="400" src={gif} alt="Random Gif" />
      </div>
      <button className="comp_btn" onClick={handleClick}> CLICK FOR NEW</button>
    </div>
  )
}

export default Random