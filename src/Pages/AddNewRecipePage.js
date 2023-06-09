import '../Styles/page.css';
import { useState } from "react";
import noimage from '../Assets/noimage.png'
import axios from "axios";
import SecondLayout from "../Layouts/SecondLayout";

export default function AddNewRecipePage() {
  const spaceID = process.env.REACT_APP_SPACE_ID;
  const environmentID = process.env.REACT_APP_ENVIRONMENT_ID;
  const contentManagementAPI = process.env.REACT_APP_CONTENT_MANAGEMENT_TOKEN;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState({
    url: noimage,
    file: null,
  });

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

  const uploadImageToContentful = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await axios.post(
        `https://upload.contentful.com/spaces/${spaceID}/uploads`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${contentManagementAPI}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const assetId = response.data.sys.id;

      return assetId;
    } catch (error) {
      console.error("Error uploading image to Contentful:", error);
      // You can handle error messages here
      return null;
    }
  };

  const createEntry = async (imageUrl) => {
    try {
      const entryResponse = await axios.post(
        `https://api.contentful.com/spaces/${spaceID}/environments/${environmentID}/entries`,
        {
          fields: {
            category: { "en-US": category },
            title: { "en-US": title },
            ingredients: { "en-US": ingredients },
            instructions: { "en-US": instructions },
            image: {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Space",
                  id: imageUrl,
                },
              },
            },
          },
          content_type_id: "recipeBook", // Update with your content type ID
        },
        {
          headers: {
            Authorization: `Bearer ${contentManagementAPI}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Recipe successfully added:", entryResponse.data);
      // You can handle success messages or redirects here
    } catch (error) {
      console.error("Error adding recipe:", error);
      // You can handle error messages here
    }
  };

  const handlePost = async () => {
    try {
      const imageUrl = await uploadImageToContentful(image.file);

      if (!imageUrl) {
        // Image upload failed
        return;
      }

      await createEntry(imageUrl);
    } catch (error) {
      console.error("Error adding recipe:", error);
      // You can handle error messages here
    }
  };

  return (
    <SecondLayout>
        <div className="AddNewRecipe">
          <div className='AddRecipeBox'>
            <p>
              Category:{" "}
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </p>
            <p>
              Recipe Title: {""}{" "}
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <div>
              <label className="cursor-pointer">
                Add image
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/png"
                />
              </label>
            </div>
            <div>
              <img
                className="w-[300px] h-[300px] object-cover"
                src={image.url || noimage}
                alt=""
              />
            </div>
            <p>
              Ingredients:{" "}
              <input
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </p>
            <p>
              Instructions:{" "}
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              ></textarea>
            </p>
            <button onClick={handlePost}>Post</button>
          </div>
        </div>
    </SecondLayout>
  );
}




// const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.createAssetFromFiles({
//   fields: {
//     title: {
//       'en-US': 'Asset title'
//     },
//     description: {
//       'en-US': 'Asset description'
//     },
//     file: {
//       'en-US': {
//         contentType: 'image/svg+xml',
//         fileName: 'circle.svg',
//         file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
//       }
//     }
//   }
// }))
// .then((asset) => asset.processForAllLocales())
// .then((asset) => asset.publish())
// .catch(console.error)