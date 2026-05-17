import ShopCard from "./ShopCard"

export default function ShopList ({smoothies}) {

    return (
        <>
        {smoothies.map((smoothie) => {
            <ShopCard key={smoothie.id} smoothie = {smoothie}/>
          })}
        </>
    )
}