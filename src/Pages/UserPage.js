import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import MainLayout from "../Layouts/MainLayout";

export default function UserPage({isAuth}) {

  const [recipeList, setRecipeList] = useState([]);
  const recipesCollectionRef = collection(db, "recipes");


  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recipesCollectionRef);
      setRecipeList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRecipes();
  });
  const deleteRecipe = async (id) => {
    const postRecipe = doc(db, "recipes", id);
    await deleteDoc(postRecipe);
  };
 

  return(
    <MainLayout>
      <div className="user-page">
      {recipeList.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deleteRecipe(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            
          </div>
        );
      })}
      </div>
    </MainLayout>
  )
}

//<h3>@{post.author.name}</h3>