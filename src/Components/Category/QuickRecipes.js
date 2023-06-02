import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";


export default function QuickRecipes () {
    const {itemCard, isItemLoading} =useFetchCards ()
     if (isItemLoading){
        return(<Spinner/>)
     }

     const dessertcard = itemCard.filter(item => item.itemCategory === 'Quick Recipes');
     console.log(dessertcard)

     return(
        <div>
            {dessertcard.map((item) => {
                const {id, itemImage, itemTitle} = item
                return(
                    
                   <SummaryCard key={id} 
                             itemTitle={itemTitle}
                             itemImage={itemImage}
                    />
                )
            })}
        </div>
     )
}