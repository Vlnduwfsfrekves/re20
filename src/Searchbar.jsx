import {Header,Form,Input,Button} from './Searchbar.styled'
import { useContext,useRef,useCallback } from "react";
import { Context } from './App';
const Searchbar=()=>{
    const input = useRef(null)
    const contextObj = useContext(Context)
    const onSubmit=useCallback(async(e)=>{
        if(contextObj.input!==''){
            e.preventDefault()
            e.currentTarget.reset()
            contextObj.changeStatus('load')
            contextObj.changeAllImages([])
            await fetch(`https://pixabay.com/api/?q=${contextObj.input}&page=1&key=39207344-802fb38289e47f3cf2d375300&image_type=photo&orientation=horizontal&per_page=12`)
            .then(r=>r.json())
            .then(res=>{contextObj.changeAllImages(res.hits);contextObj.changeCurrentPage(1)})
            .finally(()=>{contextObj.changeStatus('alreadyLoad')})
        }else{
            alert('Write a thing')
            input.current.focus()
        }
    },[contextObj.input,contextObj.changeStatus,contextObj.changeAllImages,contextObj.changeCurrentPage])
    return(
        <Header className="searchbar">
            <Form onSubmit={onSubmit} className="form">
                <Button type="submit" className="button"><span className="button-label">Search</span></Button>
                <Input ref={input} onChange={(e)=>{contextObj.inputCh(e.target.value)}} className="input" type="text" placeholder="Search images and photos" autoComplete="off" autoFocus/>
            </Form>
        </Header>
    )
}
export default Searchbar
