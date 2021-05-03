import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({list, getImages}) {
 
    return (
        <>
        
                {list.map(item =>
                    (<GalleryItem key={item.id} item={item} 
                    getImages={getImages}
                    />)
                )}
               
        
        </>
    )

}

export default GalleryList;


