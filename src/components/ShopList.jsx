import ShopCard from "./ShopCard"

export default function ShopList ({smoothies}) {

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
        {smoothies.map((smoothie) => {
            <ShopCard key={smoothie.id} smoothie = {smoothie}/>
          })}
        </div>
    )
}