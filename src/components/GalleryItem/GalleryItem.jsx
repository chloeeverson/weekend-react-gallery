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
        // props.editLikes();

        //const editLikes = () => {
        // axios.put('/gallery/like/:id')
        //     .then(function (response) {
        //       props.getImages();
        //     })
        //     .catch(function (error) {
        //       alert('error on put route client', error);
        //     })
        //   }
        
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