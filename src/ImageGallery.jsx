import ImageGalleryItem from "./ImageGalleryItem"
import {Ul} from './ImageGallery.styled'
import { useContext } from "react";
import { Context } from './App';
const ImageGallery = ()=> {
    const contextObj = useContext(Context)
    return(
        <Ul>{contextObj.allImages.map((item)=>(<ImageGalleryItem image={item}/>))}</Ul>
    )
}
export default ImageGallery