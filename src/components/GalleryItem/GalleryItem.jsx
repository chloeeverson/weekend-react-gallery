import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';

function GalleryItem({item, getImages} ){
    
    let [image, setImage] = useState(true);
  
    
   
    

    const toggleImage = () => {
        console.log('clicked image');
        setImage(!image);

    }

    const handleClick = () => {
        console.log('button clicked');
        axios.put('/gallery/like/' + item.id)
            .then(function (response) {
                console.log(response);
              getImages();
            })
            .catch(function (error) {
              alert('error on put route client', error);
            })
          
        
    }
 

    return (
        <>
        {image ?
        (<div className="item">
        <p><img onClick={toggleImage} src={item.path}/></p>
        <button onClick={handleClick}>Like</button>
        {item.likes} likes! </div>
        ) : (
            <div className="item">
                <p onClick={toggleImage}>{item.description}</p>
            <button onClick={handleClick}>Like</button>
            <p>{item.likes} likes!</p>
         </div>)
        }
    </>
    )
}

export default GalleryItem;