export default function ShopCard({smoothie}) {

    return (
    
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{smoothie.name}</h5>
                            <p className="card-text">{smoothie.ingredients.join(',')}</p>
                            <p className="card-text">{smoothie.price}</p>
                            <p className="card-text">{smoothie.badges.join(',')}</p>
                        </div>
                    </div>
                </div> 
        
    )
}