import { Link } from "react-router-dom"
export default function SummaryCard (props) {
    const {id, itemImage, itemTitle} =props

    return (
        <div key={id}>
        <p><img src={itemImage} alt={itemTitle} style={{width:'400px', height:'300px'}}/></p>
        <p>{itemTitle}</p>
        <p><Link>Read more...</Link></p>
    </div>
    )
}