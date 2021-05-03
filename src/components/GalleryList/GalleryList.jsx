import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList(props) {

    return (
        <>
            <form>
                {props.list.map(item =>
                    (<GalleryItem item={item} />)
                )}
                {props.}
            </form>
        </>
    )

}

export default GalleryList;


