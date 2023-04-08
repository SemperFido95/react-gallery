import { useState } from "react";

let GalleryItem = ({ pic }) => {
    const [toggle, setToggle] = useState(true);

    const renderDiv = () => {
        return toggle === true ? <img src={pic.path} /> : <p>{pic.description}</p>
    }

    return (
        <li key={pic.id}>
            <button onClick={() => setToggle(!toggle)}>See desc</button>
            {
                renderDiv()
            }
        </li>
    )
}

export default GalleryItem;