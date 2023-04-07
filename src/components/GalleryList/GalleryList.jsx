

let GalleryList = ({ gallery }) => {


    return (
        <ul>
            {
                gallery.map((pic) => (
                    <li key={pic.id}>
                        <img src={pic.path} />
                    </li>
                ))
            }
        </ul>
    )
}

export default GalleryList;