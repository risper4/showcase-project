import useFetchData from "../custom hook/useFetchData"
import ShopList from "./ShopList"
import AdminPortal from "./AdminPortal"

export default function Shop() {

    function addSmoothies(newData) {
        setSmoothies((prev) => ([...prev, newData]))
    }

    const {smoothies, loading, setSmoothies} = useFetchData('http://localhost:3001/smoothies')
    
    if(loading) return <p>Loading ...</p>
    return(
        <>
        <AdminPortal addSmoothies = {addSmoothies}/>
        <ShopList smoothies = {smoothies}/>
        </>
    )
}