export default function ShopCard({smoothie}) {
    
    return (
    
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
        </div>
      </div>
    </div>
        
    )
}