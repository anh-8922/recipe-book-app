export default function ItemCard (props) {
    const {id, itemImage, itemIngredients, itemInstructions, itemTitle} =props

    return (
        <div key={id} className="item-card">
          <h1>{itemTitle}</h1>
          <div className="group-1">
            <p><img src={itemImage} alt={itemTitle} style={{width:'400px', height:'300px'}}/></p>
            <ul>
            {itemIngredients.map((ingredient, index) => (
              <li key={index} style={{listStyle:"none"}}>{ingredient}</li>
            ))}
            </ul>
          </div>
          
          <p>{itemInstructions}</p>
        </div>
    )
}