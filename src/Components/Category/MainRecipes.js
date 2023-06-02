// import SummaryCard from "../SummaryCard";
// import { useState, useEffect, useCallback } from "react";
// import {Client} from '../Client'
// import Spinner from "../Spinner";

// export default function MainRecipieCards () {
//     const [isItemLoading, setIsItemLoading] = useState (false)
//     const [itemCard, setItemCard] = useState([])

//     const cleanUpItemCard = useCallback ((rawData) =>{
//         const cleanItemCard = rawData.map((item) =>{
//             const {sys, fields} = item
//             const {id} = sys
//             const itemTitle = fields.title
//             const itemCategory = fields.category
//             const itemImage = fields.image?.fields?.file?.url || ''
//             const updatedItem = {id, itemTitle, itemImage, itemCategory}
//             return updatedItem
//         })

//         setItemCard(cleanItemCard)
//     }, [])

//     const getRecipeItems = useCallback(async () => {
//         setIsItemLoading(true)    
//         try{
//             const response = await Client.getEntries({content_type:'recipeBook'})
//             console.log(response)
//             const responseData= response.items
//             console.log(responseData)
            
//             if(responseData) {
//                 cleanUpItemCard(responseData)
//             } else {
//                 setItemCard([])
//             }
//         }catch (error) {
//             console.log(error)
//             setItemCard([])
//             setIsItemLoading(false)
//         } finally{
//             setIsItemLoading(false)
//         }
//     }, [cleanUpItemCard])

//     useEffect (() => {
//         getRecipeItems()
//     }, [getRecipeItems])


//     if (isItemLoading) {
//         return (
//             <Spinner/>
//         )
//     }

//     const itemCardCatergary = itemCard.filter(item => item.itemCategory === 'Main');
//     console.log(itemCardCatergary)
    
//     return(
//         <div>
            
//             {
//             itemCardCatergary.map((item) => {
//                 const {id, itemImage, itemTitle} = item
//                 return(
                    
//                    <SummaryCard key={id} 
//                              itemTitle={itemTitle}
//                              itemImage={itemImage}
//                     />
//                 )
//             })}
//         </div>
//     )
// }


import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";


export default function Desserts () {
    const {itemCard, isItemLoading} =useFetchCards ()
     if (isItemLoading){
        return(<Spinner/>)
     }

     const dessertcard = itemCard.filter(item => item.itemCategory === 'Main');
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