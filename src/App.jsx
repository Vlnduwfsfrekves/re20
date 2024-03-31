import Searchbar from './Searchbar'
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import {Div} from './App.styled'
import { useState,createContext,useEffect,useCallback } from "react";
import Loader from "./Loader";
import Modal from "./Modal";
export const Context = createContext(null)
const App=()=>{
    const [currentPage,changeCurrentPage]=useState(1)
    const [status,changeStatus]=useState('none')
    const [allImages,changeAllImages]=useState([])
    const [hiddenIs,changeHiddenIs]=useState(true)
    const [input,changeInput]=useState('')
    const [link,changeLink]=useState('')
    useEffect(()=>{
    document.addEventListener('keydown',(e)=>{
            if(e.key==='Escape'){
                changeHiddenIs(true)
            }
    })
    return()=>{
        document.removeEventListener('keydown',(e)=>{
            if(e.key==='Escape'){
                changeHiddenIs(true)
            }
        })
    }
    })
    const inputCh=useCallback((input)=>{
        changeInput(input)
    },[changeInput])
    const clickIm=useCallback((e)=>{
        changeHiddenIs(false)
        changeLink(e.target.src)
    },[changeHiddenIs,changeLink])
    const clBackdrop=useCallback((e)=>{
        if(e.target===e.currentTarget){
            changeHiddenIs(true)
        }
    },[changeHiddenIs])
    const loadMore= useCallback(async ()=>{
        changeStatus('load')
        await fetch(`https://pixabay.com/api/?q=${input}&page=${currentPage+1}&key=39207344-802fb38289e47f3cf2d375300&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r=>r.json())
        .then(res=>{changeAllImages([...allImages,...res.hits]);changeCurrentPage(currentPage+1)})
        .finally(()=>changeStatus('alreadyLoad'))
    },[changeStatus,input,currentPage,changeAllImages,allImages,changeCurrentPage])
    return(
        <Context.Provider value={{inputCh:inputCh,clickIm:clickIm,allImages:allImages,status:status,loadMore:loadMore,input:input,clBackdrop:clBackdrop,hiddenIs:hiddenIs,link:link,changeStatus:changeStatus,changeAllImages:changeAllImages,changeCurrentPage:changeCurrentPage}}>
            <Div>
                <Searchbar/>
                <ImageGallery/>
                <Loader/>
                <Button/>
                <Modal/>
            </Div>
        </Context.Provider>
    )
}
export default App;