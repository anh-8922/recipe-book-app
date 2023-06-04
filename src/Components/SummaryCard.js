
import '../Styles/component.css';
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
// import { Link } from "react-router-dom"
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

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
                    // name="simple-controlled"
                    // name={`rating-${id}`}
                    // value={value || 0}
                    // onChange={(event, newValue) => {
                    // setValue(newValue);
                    // }}
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