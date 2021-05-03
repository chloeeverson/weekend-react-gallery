import './GalleryItem.css';
import { useState } from 'react';


function GalleryItem( props ){
    console.log(props);
    let [image, setImage] = useState(true);
  
    let [like, setLike] = useState(0);
   
    

    const toggleImage = () => {
        console.log('clicked image');
        setImage(!image);

    }

    const handleClick = () => {
        console.log('button clicked');
        setLike(like + 1);
        
    }
 

    return (
        <>
        <div className="item" onClick={toggleImage}>
        {image ? (<img key={props.item.id} src={props.item.path}/>) : 
                    (<p key={props.item.id}>{props.item.description}</p>)
                }
        
     
        <button onClick={handleClick}>Like</button>
        {like} likes!
         </div>
        </>
    )
}

export default GalleryItem;