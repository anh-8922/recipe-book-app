
import '../Styles/component.css';
import Rating from '@mui/material/Rating';

export default function SummaryCard (props) {
    const {id, itemImage, itemTitle} =props
 
    

    return (
        <div key={id} style={{backgroundColor: "aliceblue"}}>
            <div className="category-items">
                <img id="category-img" src={itemImage} alt={itemTitle}/>
                <p id="category-p">{itemTitle}</p>
            </div>
            <div style={{marginLeft:'1rem'}}>
                <Rating
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onHandleRating}
                />
            </div>
            <button onClick={props.onHandleClick}>Read more...</button>

        </div>
    )
}