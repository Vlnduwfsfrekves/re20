import {Backdrop,DivIm,Ima} from './Modal.styled'
import { useContext } from "react";
import { Context } from './App';
const Modal=()=>{
    const contextObj = useContext(Context)
    return(
        contextObj.hiddenIs===false?(
        <Backdrop onClick={contextObj.clBackdrop} className="overlay">
            <DivIm className="modal">
                <Ima alt={contextObj.input} src={contextObj.link}/>
            </DivIm>
        </Backdrop>
        ):(<></>)
    )
}
export default Modal