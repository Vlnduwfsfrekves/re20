import {Li,Img} from './ImageGalleryItem.styled'
import { useContext } from "react";
import { Context } from './App';
const ImageGalleryItem=({image})=>{
    const contextObj = useContext(Context)
    return(
        <Li class="gallery-item">
            <Img src={image.webformatURL} alt="" onClick={contextObj.clickIm}/>
        </Li>
    )
}
export default ImageGalleryItem