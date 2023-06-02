import { Link } from "react-router-dom"
import '../Styles/component.css';

export default function SummaryCard (props) {
    const {id, itemImage, itemTitle} =props

    return (
        <div key={id}>
            <div className="category-items">
                <img id="category-img" src={itemImage} alt={itemTitle}/>
                <p id="category-p">{itemTitle}</p>
            </div>
            
            {/* <p><Link to='/singlerecipepage'>Read more...</Link></p> */}
            <button onClick={props.onHandleClick}>Read more...</button>
        </div>
    )
}