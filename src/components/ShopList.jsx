import ShopCard from "./ShopCard"

export default function ShopList ({smoothies, addDelete, addEdit}) {
    // console.log(JSON.stringify(smoothies))
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4 mb-3">
        {smoothies.map((smoothie) => (
            <ShopCard key={smoothie.id} smoothie = {smoothie} addDelete = {addDelete} addEdit ={addEdit}/>
          ))}
        </div>

        
    )
}