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
    console.log('calling getImages');
    axios.get('/gallery')
      .then(response => {
        setGalleryList(response.data)
      })
      .catch(err => {
        alert('error getting images');
        console.log(err);
      })
  }

    // function to change number of likes when  button clicked
    // const editLikes = () => {
    //   axios.put('/gallery/like/:id')
    //   .then(function (response) {
    //     getImages();
    //   })
    //   .catch(function (error) {
    //     alert('error on put route client', error);
    //   })
    // }



  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list={galleryList}
          getImages={getImages}
          />
      </div>
    );
}

export default App;
