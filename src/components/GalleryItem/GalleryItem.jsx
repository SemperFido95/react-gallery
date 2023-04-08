import Axios from "axios";
import { useState } from "react";

let GalleryItem = ({ pic, getPics }) => {
    const [toggle, setToggle] = useState(true);

    const renderDiv = () => {
        return toggle === true ? <img src={pic.path} /> : <p>{pic.description}</p>
    }

    const increaseLikes = () => {
        Axios.put(`/gallery/like/${pic.id}`).then((response) => {
            getPics();
        }).catch((error) => {
            console.log(`Error in GET ${error}`)
        })
    }

    return (
        <li key={pic.id}>
            <button onClick={() => setToggle(!toggle)}>See desc</button>
            {
                renderDiv()
            }
            <button onClick={() => {increaseLikes()}}>Like</button>
            <p>Likes: {pic.likes}</p>
        </li>
    )
}

export default GalleryItem;