export default function ItemCard (props) {
    const {id, itemImage, itemIngredients, itemInstructions, itemTitle} =props

    return (
        <div key={id}>
        <p>{itemTitle}</p>
        <p><img src={itemImage} alt={itemTitle} style={{width:'400px', height:'300px'}}/></p>
        <p>{itemIngredients}</p>
        <p>{itemInstructions}</p>
    </div>
    )
}