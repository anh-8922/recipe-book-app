// import useFetchCards from "../../CustomHook/FetchData";
// import SummaryCard from "../SummaryCard";
// import Spinner from "../Spinner";
// import { useNavigate } from "react-router-dom";


// export default function QuickRecipes () {
//     const {itemCard, isItemLoading} =useFetchCards ()

//     const navigate = useNavigate ()

//     const HandleReadMore = () =>{
//         navigate('/singlerecipepage')
//     }

//      if (isItemLoading){
//         return(<Spinner/>)
//      }

//      const quickRecipeCard = itemCard.filter(item => item.itemCategory.toLowerCase() === 'quick recipes');
//      console.log(quickRecipeCard)

//      return(
//         <div>
//             {quickRecipeCard.map((item) => {
//                 const {id, itemImage, itemTitle} = item
//                 return(
                    
//                    <SummaryCard key={id} 
//                              itemTitle={itemTitle}
//                              itemImage={itemImage}
//                              onHandleClick={HandleReadMore}
//                     />
//                 )
//             })}
//         </div>
//      )
// }


import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

export default function QuickRecipes() {
  const { itemCard, isItemLoading } = useFetchCards();
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/singlerecipepage/${id}`);
  };

  if (isItemLoading) {
    return <Spinner />;
  }

  const quickRecipeCard = itemCard.filter(
    (item) => item.itemCategory.toLowerCase() === "quick recipes"
  );

  return (
    <div>
      {quickRecipeCard.map((item) => {
        const { id, itemImage, itemTitle } = item;
        return (
          <SummaryCard
            key={id}
            itemTitle={itemTitle}
            itemImage={itemImage}
            onHandleClick={() => handleReadMore(id)}
          />
        );
      })}
    </div>
  );
}