import useFetchData from "../custom hook/useFetchData"
import ShopList from "./ShopList"
export default function Shop() {

    const {smoothies, loading, setSmoothies} = useFetchData('http://localhost:3001/smoothies')
    
    if(loading) return <p>Loading ...</p>
    return(
        <>
        <ShopList smoothies = {smoothies}/>
        </>
    )
}