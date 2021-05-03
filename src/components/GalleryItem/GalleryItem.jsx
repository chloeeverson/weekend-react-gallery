import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem( props ){
    console.log(props);
    let [image, setImage] = useState(true);
    // let [description, setDescription] = useState('');
    // let [like, setLike] = useState(<img key={props.item.id} src={props.item.path}/>);
    
    // const imagePath = {
    //     image: <img key={props.item.id} src={props.item.path}/>,
    //     description: <form key={props.item.id}>{props.item.description}</form>
    // }

    

    const toggleImage = () => {
        console.log('clicked image');
        setImage(!image);

    }

    // getImageName = () => this.state.open ? 'image' : 'description'
    // const handleClick = () => {
    //     console.log('in handleClick');
    //     setLike(like + 1);
       
    // }
    // const imageName = this.getImageName();

    return (
        <>
        <div className="item" onClick={toggleImage}>
        {image ? (<img key={props.item.id} src={props.item.path}/>) : 
                    (<p key={props.item.id}>{props.item.description}</p>)
                }
        
     
        {/* <button onClick={handleClick}>Like</button>
        {like} likes! */}
         </div>
        </>
    )
}

export default GalleryItem;