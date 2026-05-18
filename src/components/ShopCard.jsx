import { useState } from "react"
import '../App.css'


export default function ShopCard({smoothie, addDelete, addEdit}) {
    
    const [editForm, setEditForm] = useState({
        name : smoothie.name, ingredients : smoothie.ingredients, price : smoothie.price, badges : smoothie.badges
    })

   

    function handleEdit(){
        fetch(`http://localhost:3001/smoothies/${smoothie.id}`,
            {
                method : 'PATCH',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(editForm)
            }
        )
         .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred', response.status)
                } else {
                    return response.json()
                }
        })
        .then((editedSmoothie) => {
            addEdit(editedSmoothie)
            setEditForm({
                name : '', ingredients : '', price : '', badges : ''
            })
        })

    }

    function handleEditOnchange(e){
        setEditForm({...editForm, [e.target.name] : e.target.value})
    }

    function handleDelete() {

        fetch(`http://localhost:3001/smoothies/${smoothie.id}`, 
            {
                method : 'DELETE'
            }
        )
        .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred', response.status)
                } else {
                    return response.json()
                }
        })
        .then((deletedItem) => {
            addDelete(deletedItem)
            alert('Item deleted')
        })
        .catch((error) => console.log(error))
    }

    return (
    
    <>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{smoothie?.name}</h5>
          <p className="card-text">
            {Array.isArray(smoothie?.ingredients)
              ? smoothie.ingredients.join(', ')
              : smoothie.ingredients}
          </p>
          <p className="card-text">{smoothie?.price}</p>
          <p className="card-text">
            {Array.isArray(smoothie?.badges)
              ? smoothie.badges.join(', ')
              : smoothie.badges}
          </p>
          <section>
            
            <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Remove</button>
          </section>
        </div>
      </div>
    </div>

    <form onSubmit={handleEdit} className="edit-form">
        <input
         type="text" 
         name="name"
         value={editForm.name}
         onChange={(e) => handleEditOnchange(e)}
         />
         <input
         type="text" 
         name="ingredients"
         value={editForm.ingredients}
         onChange={(e) => handleEditOnchange(e)}
         />
         <input
         type="text" 
         value={editForm.price}
         name="price"
         onChange={(e) => handleEditOnchange(e)}
         />
         <input
         type="text"
         name="badges" 
         value={editForm.badges}
         onChange={(e) => handleEditOnchange(e)}
         />
         <br /><br />
         <button type="submit" className="btn btn-outline-success" >Edit</button>
    </form>
    </>
        
    )
}