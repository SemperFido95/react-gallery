import GalleryItem from "../GalleryItem/GalleryItem";


let GalleryList = ({ gallery, getPics }) => {


    return (
        <ul>
            {
                gallery.map((pic) => (
                    <GalleryItem 
                        pic={pic}
                        key={pic.id}
                        getPics={getPics}
                    />
                ))
            }
        </ul>
    )
}

export default GalleryList;