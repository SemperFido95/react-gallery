import React from 'react';
import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [gallery, setGallery] = useState([]);

  let getPics = () => {
    Axios.get('/gallery').then((response) => {
      setGallery(response.data);
      console.log(response.data)
    })
  }

  useEffect(() => {
    getPics();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallery={gallery}/>
      </div>
    );
}

export default App;
