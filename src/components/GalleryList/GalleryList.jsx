import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList(props) {
    // props.editLikes();
    return (
        <>
            <form>
                {props.list.map(item =>
                    (<GalleryItem item={item} 
                    //props.editLikes={editLikes}
                    />)
                )}
               
            </form>
        </>
    )

}

export default GalleryList;


