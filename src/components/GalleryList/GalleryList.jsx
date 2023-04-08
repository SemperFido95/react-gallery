import GalleryItem from "../GalleryItem/GalleryItem";


let GalleryList = ({ gallery }) => {


    return (
        <ul>
            {
                gallery.map((pic) => (
                    <GalleryItem 
                        pic={pic}
                        key={pic.id}
                    />
                ))
            }
        </ul>
    )
}

export default GalleryList;