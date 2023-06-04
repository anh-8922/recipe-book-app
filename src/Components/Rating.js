
import '../Styles/component.css';
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
// import { Link } from "react-router-dom"
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

export default function Rating (props) {
    const {id, itemImage, itemTitle} =props
    const [value, setValue] = useState(null);
    
    // const StyledRating = styled(Rating)({
    //     '& .MuiRating-iconFilled': {
    //       color: '#ff6d75',
    //     },
    //     '& .MuiRating-iconHover': {
    //       color: '#ff3d47',
    //     },
    //   });

    useEffect(() => {
        const existingRatings = JSON.parse(localStorage.getItem('ratings')) || [];
        const existingRating = existingRatings.find((rating) => rating.id === id);
    
        if (existingRating) {
        setValue(existingRating.value);
      } else {
        setValue(0); // Set initial value to 0 if no existing rating found
      }
    }, [id]);
  
    useEffect(() => {
      const existingRatings = JSON.parse(localStorage.getItem('ratings')) || [];
      const updatedRatings = existingRatings.map((rating) => {
        if (rating.id === id) {
          return { id, value };
        }
        return rating;
      });
  
      if (existingRatings.some((rating) => rating.id === id)) {
        localStorage.setItem('ratings', JSON.stringify(updatedRatings));
      } else {
        localStorage.setItem('ratings', JSON.stringify([...updatedRatings, { id, value }]));
      }
    }, [id, value]);

    return (
        <div key={id} style={{backgroundColor: "aliceblue"}}>
            <div className="category-items">
                <img id="category-img" src={itemImage} alt={itemTitle}/>
                <p id="category-p">{itemTitle}</p>
            </div>
            <div style={{marginLeft:'1rem'}}>
                <Rating
                    // name="simple-controlled"
                    name={`rating-${id}`}
                    value={value || 0}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </div>
            <button onClick={props.onHandleClick}>Read more...</button>
            
            {/* <p><Link to='/singlerecipepage'>Read more...</Link></p> */}
            
            {/* <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                /> */}
        </div>
    )
            }