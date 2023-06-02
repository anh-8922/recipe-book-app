import MainLayout from "../Layouts/MainLayout";
import RecipeCards from "../Components/RecipeCards";
import '../Styles/page.css';

export default function About() {
    return(
        <MainLayout>
            <div id="about">
                <h1>About Project</h1><hr/>
                <p>Testing</p>
                <RecipeCards/>
            </div>
        </MainLayout>
    )
}