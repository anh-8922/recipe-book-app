import { useState } from "react"


export default function AddNewRecipePage () {

    const [category, setCategory] = useState ('')
    const [title, setTitle] = useState ('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')

    const handlePost = async() =>{

    }
    return (
        <div>
            <p>Category: <input value={category}
                                onChange={(e)=> setCategory(e.target.value)} /></p>
            <p>Recipe Title: <input value={title}
                                onChange={(e)=> setTitle(e.target.value)} /></p>
            <p>Image: </p>
            <p>Ingredients: <input value={ingredients}
                                onChange={(e)=> setIngredients(e.target.value)}/></p>
            <p>Instructions: <textarea value={instructions}
                                onChange={(e)=> setInstructions(e.target.value)}></textarea></p>
            <button onClick={handlePost}>Post</button>
        </div>
    )
        
    
}