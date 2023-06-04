import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./category.css";

export default function Desserts(props) {
  const { id } = props;
  const { itemCard, isItemLoading } = useFetchCards();
  const [ratings, setRatings] = useState(new Map());
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/singlerecipepage/${id}`);
  };

  useEffect(() => {
    const existingRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    const ratingsMap = new Map(existingRatings);
    setRatings(ratingsMap);
  }, []);

  const handleRatingChange = (id, value) => {
    const updatedRatings = new Map(ratings);
    updatedRatings.set(id, value);
    setRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify([...updatedRatings]));
  };

  if (isItemLoading) {
    return <Spinner />;
  }

  const dessertsCard = itemCard.filter(
    (item) => item.itemCategory.toLowerCase() === "desserts"
  );

  return (
    <div style={{display:'flex', gap:'2rem', flexWrap:'wrap'}}>
      {dessertsCard.map((item) => {
        const { id, itemImage, itemTitle } = item;
        const ratingValue = ratings.get(id) || 0;
        return (
          <SummaryCard
            key={id}
            itemTitle={itemTitle}
            itemImage={itemImage}
            onHandleClick={() => handleReadMore(id)}
            name={`rating-${id}`}
            value={ratingValue}
            onHandleRating={(event, newValue) => {
            handleRatingChange(id, newValue);
            }}
            id={id} 
          />
        );
      })}
    </div>
  );
}