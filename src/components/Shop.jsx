// import useFetchData from "../custom hook/useFetchData"
import ShopList from "./ShopList"
// import AdminPortal from "./AdminPortal"
import { useState } from "react"
import Search from "./Search"
import { UseSmoothies } from "../useContext/SmoothieContext"

export default function Shop() {

    const [search, setSearch] = useState('')
    

    // function addSmoothies(newData) {
    //     setSmoothies((prev) => ([...prev, newData]))
    // }

    // const {smoothies, loading, setSmoothies} = useFetchData('http://localhost:3001/smoothies')
    const {smoothies, loading, setSmoothies} = UseSmoothies()
    const filteredSmoothies = smoothies.filter((smoothie) => {
       return smoothie.name.toLowerCase().includes(search.toLowerCase())
    }) 
    
    if(loading) return <p>Loading ...</p>
    return(
        <>
        <Search search = {search} setSearch = {setSearch}/>
        {/* <AdminPortal addSmoothies = {addSmoothies}/> */}
        <ShopList smoothies = {filteredSmoothies}/>
        </>
    )
}