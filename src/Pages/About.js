import MainLayout from "../Layouts/MainLayout";
import Appetizer from "../Components/Category/Appetizer";
import '../Styles/page.css';

export default function About() {
    return(
        <MainLayout>
            <div id="about">
                <h1>About Project</h1><hr/>
                <p>Testing</p>
                <Appetizer/>
            </div>
        </MainLayout>
    )
}