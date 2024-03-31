import {ButtonL,DivL} from "./Button.styled";
import { useContext } from "react";
import { Context } from './App';
const Button=()=>{
    const contextObj = useContext(Context)
    return (
        contextObj.status==='alreadyLoad'?<DivL><ButtonL onClick={()=>contextObj.loadMore()}>Load more</ButtonL></DivL>:<></>
    )
}
export default Button;
