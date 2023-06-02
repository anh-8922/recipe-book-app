import ItemCard from "../Components/ItemCard";
import MainLayout from "../Layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useFetchCards from "../CustomHook/FetchData";

export default function SingleRecipePage() {
  const { id } = useParams();
  const { itemCard, isItemLoading } = useFetchCards();

  if (isItemLoading) {
    return <Spinner />;
  }

  const selectedRecipe = itemCard.find((item) => item.id === id);

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  const { itemImage, itemIngredients, itemInstructions, itemTitle } = selectedRecipe;

  return (
    <MainLayout>
      <div>
        <ItemCard
          itemTitle={itemTitle}
          itemImage={itemImage}
          itemIngredients={itemIngredients}
          itemInstructions={itemInstructions}
        />
        <Link to="/recipe">
          <button>Back to Recipes</button>
        </Link>
      </div>
    </MainLayout>
  );
}
