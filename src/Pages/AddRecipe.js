import MainLayout from "../Layouts/MainLayout";
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function AddRecipe({isAuth}) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState("");
    const recipesCollectionRef = collection(db, "recipes");
    let navigate = useNavigate();  
    
    const createRecipe = async ({isAuth}) => {
        await addDoc(recipesCollectionRef, {
          title,
          postText,
          image,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/addnewrecipes");
      };

    const handleImageChange = (e) => {
        console.log("the file is", e.currentTarget.files[0]);
    
        if (!e.currentTarget.files[0]) return;
    
        if (e.currentTarget.files[0].size > 1000000) {
          alert("This file is bigger than 100kB");
          return;
        }
        setImage({
          url: URL.createObjectURL(e.currentTarget.files[0]),
          file: e.currentTarget.files[0],
        });
    };

    useEffect(() => {
        if (!isAuth) {
          navigate("/addnewrecipes");
        }
      }, []);

    return(
        <MainLayout>
            <div style={{backgroundColor: 'yellow'}}>
                <h1>Add your Recipe</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input
                        placeholder="Title..."
                        onChange={(event) => {
                        setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGp">
                    <label> Add image:</label>
                    <input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/png"
                        placeholder="Title..."
                    />
                    <div>
                        <img
                            className="w-[300px] h-[300px] object-cover"
                            src={image.url }
                            alt=""
                        />
                    </div>
                </div>
                <div className="inputGp">
                <label> Instructions:</label>
                <textarea
                    placeholder="Post..."
                    onChange={(event) => {
                    setPostText(event.target.value);
                    }}
                />
                </div>
                <button onClick={createRecipe}> Submit Post</button>
            </div>
        </MainLayout>
    )
}

//const [image, setImage] = useState({
//   url: noimage,
//    file: null,
//  });

//|| noimage