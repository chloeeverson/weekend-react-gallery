function GalleryList(props) {

    return (
        <>
            <p>My Gallery</p>
            <form>
                {props.list.map(image =>
                    (<GalleryItem key={image.id}
                        path={image.path}
                        title={image.title}
                        description={image.description}
                        likes={image.likes}
                        />))}
            </form>
        </>
    )

}

export default GalleryList;


