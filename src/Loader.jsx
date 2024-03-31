import {Grid} from 'react-loader-spinner'
import { useContext } from "react";
import { Context } from './App';
const Loader=()=>{
    const contextObj = useContext(Context)
    return(
        contextObj.status==='load'?(<Grid visible={true} height="80" width="80" color="red" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{display:'flex',justifyContent:'center'}} wrapperClass="grid-wrapper"/>):(<></>)
    )
}
export default Loader