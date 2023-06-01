import ItemCard from "../Components/ItemCard";
import MainLayout from "../Layouts/MainLayout";
import {Link} from 'react-router-dom' 

export default function SingleRecipePage () {

    return(
        <MainLayout>
            <div>
                SingleRecipePage
                {/* <ItemCard/> */}

                <Link to='/recipe'><button>Back to Recipes</button></Link>
            </div>
        </MainLayout>
    )
}