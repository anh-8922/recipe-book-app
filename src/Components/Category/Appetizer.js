import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";


export default function Appetizer () {
    const {itemCard, isItemLoading} =useFetchCards ()
     if (isItemLoading){
        return(<Spinner/>)
     }

     const appetizerCard = itemCard.filter(item => item.itemCategory.toLowerCase() === 'appetizer');
     console.log(appetizerCard)

     return(
        <div>
            {appetizerCard.map((item) => {
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