import { useState, useId } from "react"
import { UseSmoothies } from "../useContext/SmoothieContext"

export default function AdminPortal() {
    const {smoothies, setSmoothies} = UseSmoothies()
    const [formData, setFormData] = useState({
        name : '',
        price : '',
        ingredients : '',
        badges : ''
    })

    function handleSubmit (event) {
       event.preventDefault()

       fetch('http://localhost:3001/smoothies',
        {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formData)
        }
       )
       .then((response) => {
        if(!response.ok){
            throw new Error('Error occurred')
        }else{
            return response.json()
        }
       })
       .then((data) => {
         setSmoothies([...smoothies, data])
         setFormData({
            name : '',
            price : '',
            ingredients : '',
            badges : ''
         })
       })
       .catch((error) => alert(error))
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const nameId = useId()
    const priceId = useId()
    const ingredientId = useId()
    const badgeId = useId()


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             id = {nameId}
             name = 'name'
             placeholder="Enter name"
             value = {formData.name}
             onChange={(e) => handleOnChange(e)}
             />
             <input
             type="number"
             id = {priceId} 
             name = 'price'
             placeholder="Enter price"
             value = {formData.price}
             onChange={(e) => handleOnChange(e)}
             />
             <input
             type="text"
             id = {ingredientId} 
             name = 'ingredients'
             placeholder="Enter ingredients"
             value = {formData.ingredients}
             onChange={(e) => handleOnChange(e)}
             />
             <input
             type="text"
             id = {badgeId} 
             name = 'badges'
             placeholder="Enter badge"
             value = {formData.badges}
             onChange={(e) => handleOnChange(e)}
             />
             <button type="submit">Submit</button>
        </form>
        </>
    )
}