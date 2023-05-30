// import { useLocation } from "react-router-dom";
// import { useState, useEffect, useCallback } from 'react';
// import { Client } from '../Components/Client';
// import ItemCard from '../Components/ItemCard';
// import Spinner from "../Components/Spinner";

// export default function SearchPage() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("q");
//   const [searchQuery, setSearchQuery] = useState(query || '');
//   const [isItemLoading, setIsItemLoading] = useState(false);
//   const [itemCard, setItemCard] = useState([]);

//   const getRecipeItems = useCallback (
//     async () => {
//       setIsItemLoading(true);
  
//       try {
//         const response = await Client.getEntries({
//           content_type: 'recipeBook',
//           query: searchQuery,
//         });
  
//         const responseData = response.items;
//         console.log(responseData);
  
//         if (responseData) {
//           setItemCard(responseData);
//         } else {
//           setItemCard([]);
//         }
//       } catch (error) {
//         console.log(error);
//         setItemCard([]);
//       } finally {
//         setIsItemLoading(false);
//       }
//     }, [searchQuery])

//   useEffect(() => {
//     getRecipeItems();
//   }, [getRecipeItems] );

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   navigate(`/search?q=${searchQuery}`);
//   // };

//   return (
//     <div>

//       {isItemLoading ? (
//         <div >
//          <Spinner/>
//         </div>
//       ) : (
//         <div>
//           {itemCard.map((item, index) => {
//             const { id, fields } = item;
//             const itemTitle = fields?.title || '';
//             const itemInstructions = fields?.instructions || '';
//             const itemIngredients = fields?.ingredients || '';
//             const itemImage = fields?.image?.fields?.file?.url || '';
            

//             return (
//               <ItemCard
//                 key={index}
//                 itemTitle={itemTitle}
//                 itemImage={itemImage}
//                 itemIngredients={itemIngredients}
//                 itemInstructions={itemInstructions}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }




import { useState, useEffect, useCallback, useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';
import { Client } from '../Components/Client';
import ItemCard from '../Components/ItemCard';
import Spinner from '../Components/Spinner';

export default function SearchPage() {
  const { searchQuery } = useContext(SearchContext);
  const [isItemLoading, setIsItemLoading] = useState(false);
  const [itemCard, setItemCard] = useState([]);

  const getRecipeItems = useCallback(async () => {
    setIsItemLoading(true);

    try {
      let response;
      if (searchQuery.trim() !== '') {
        response = await Client.getEntries({
          content_type: 'recipeBook',
          query: searchQuery,
        });
      } 

      const responseData = response.items;
      console.log(responseData);

      if (responseData) {
        setItemCard(responseData);
      } else {
        setItemCard([]);
      }
    } catch (error) {
      console.log(error);
      setItemCard([]);
    } finally {
      setIsItemLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    getRecipeItems();
  }, [getRecipeItems, searchQuery]);

  return (
    <div>
      {isItemLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {itemCard.map((item, index) => {
            const { id, fields } = item;
            const itemTitle = fields?.title || '';
            const itemInstructions = fields?.instructions || '';
            const itemIngredients = fields?.ingredients || '';
            const itemImage = fields?.image?.fields?.file?.url || '';

            return (
              <ItemCard
                key={index}
                itemTitle={itemTitle}
                itemImage={itemImage}
                itemIngredients={itemIngredients}
                itemInstructions={itemInstructions}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
