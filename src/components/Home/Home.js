import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { getProducts} from '../../reducers/actions/product'

export default function Home({setCurrentId, currentId}){
    
    const dispatch = useDispatch()

    
    return(
        <>
        <Form currentId={currentId}setCurrentId={setCurrentId}/>
        <Posts setCurrentId={setCurrentId}/>
        </>
    )
}