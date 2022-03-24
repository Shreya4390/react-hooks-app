import React, { useState, useEffect } from 'react';
import axios from 'axios';
//API key
const API_KEY = process.env.REACT_APP_API_KEY

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const [gif, setGif] = useState('');
  const fetchData = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc)
  }

  //COMPONENT DID MOUNT  ... first render
  useEffect(() => {
    fetchData('')
  }, []);

  const handleClick = () => {
    fetchData(tag)
  };

  return (
    <div className='ct-container '>
      <div>
        <h1>Random {tag} Gif</h1>
        <img width="400" height="400" src={gif} alt="tag" />
      </div>
      <div>
        <input value={tag} onChange={(e) => setTag(e.target.value)} />
        <button className="comp_btn" onClick={handleClick}> CLICK FOR NEW</button>
      </div>
    </div>
  )
}

export default Tag