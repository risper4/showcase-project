// import useFetchData from "../custom hook/useFetchData"
import ShopList from "./ShopList"
// import AdminPortal from "./AdminPortal"
import { useState } from "react"
import Search from "./Search"
import NavBar from "./NavBar"
import { UseSmoothies } from "../useContext/SmoothieContext"

export default function Shop() {

    const [search, setSearch] = useState('')
    
    function addDelete(deletedSmoothie){
        const smoothieToDelete = smoothies.filter((smoothie) => {
            smoothie.id !== deletedSmoothie.id
        })
        setSmoothies(smoothieToDelete)
    }

    // const {smoothies, loading, setSmoothies} = useFetchData('http://localhost:3001/smoothies')
    const {smoothies, loading, setSmoothies} = UseSmoothies()
    const filteredSmoothies = smoothies.filter((smoothie) => {
       return smoothie.name.toLowerCase().includes(search.toLowerCase())
    }) 

    function addEdit(editedItem) {
        const itemToEdit = smoothies.map((smoothie) =>{
            if(smoothie.id === editedItem.id){
                return editedItem
            }else{
                smoothie
            }
            setSmoothies(itemToEdit)
        })
    }
    
    if(loading) return <p>Loading ...</p>
    return(
        <>
        <NavBar/>
        <Search search = {search} setSearch = {setSearch}/>
        {/* <AdminPortal addSmoothies = {addSmoothies}/> */}
        <ShopList smoothies = {filteredSmoothies} addDelete = {addDelete} addEdit = {addEdit}/>
        </>
    )
}