// import useFetch from "../CustomHook/FetchData";


import { useState, useEffect, useCallback } from "react";
import {Client} from './Client'
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";

export default function RecipieCards () {
    const [isItemLoading, setIsItemLoading] = useState (false)
    const [itemCard, setItemCard] = useState([])

    const cleanUpItemCard = useCallback ((rawData) =>{
        const cleanItemCard = rawData.map((item) =>{
            const {sys, fields} = item
            const {id} = sys
            const itemTitle = fields.title
            const itemInstructions = fields.instructions
            const itemIngredients= fields.ingredients
            const itemCategory = fields.category
            // const itemImage = fields.image.fields.file.url
            const itemImage = fields.image?.fields?.file?.url || ''

            const updatedItem = {id, itemTitle, itemIngredients, itemInstructions, itemImage, itemCategory}
            return updatedItem
        })

        setItemCard(cleanItemCard)
    }, [])

    const getRecipeItems = useCallback(async () => {
        setIsItemLoading(true)    
        try{
            const response = await Client.getEntries({content_type:'recipeBook'})
            const responseData= response.items
            // console.log(responseData)
            
            if(responseData) {
                cleanUpItemCard(responseData)
            } else {
                setItemCard([])
            }
        }catch (error) {
            console.log(error)
            setItemCard([])
            setIsItemLoading(false)
        } finally{
            setIsItemLoading(false)
        }
    }, [cleanUpItemCard])

    useEffect (() => {
        getRecipeItems()
    }, [getRecipeItems])


    if (isItemLoading) {
        return (
            <Spinner/>
        )
    }

    
    return(
        <div>
            {itemCard.map((item) => {
                const {id, itemImage, itemIngredients, itemInstructions, itemTitle} = item
                return(
                    
                   <ItemCard key={id} 
                             itemTitle={itemTitle}
                             itemImage={itemImage}
                             itemIngredients={itemIngredients}
                             itemInstructions={itemInstructions}
                    />
                )
            })}
        </div>
    )
}

     
