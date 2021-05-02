import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'



function App() {
  let [galleryList, setGalleryList] = useState([]);

  //on load get images
  useEffect(() => {
    getImages()
  }, [])

  const getImages = () => {
    axios.get('/gallery')
      .then(response => {
        setGalleryList(response.data)
      })
      .catch(err => {
        alert('error getting images');
        console.log(err);
      })
  }


  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list={galleryList} />
        <img src="images/bwca.jpg"/>
      </div>
    );
}

export default App;
