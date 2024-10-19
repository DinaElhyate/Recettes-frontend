import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";
import Recipes from "./Recipes";
import RecipeCard from "../components/RecipeCard";
import NewsletterSection from "../components/NewsletterSection";

const recipes = [
    
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    }
].sort(() => Math.random() - 0.5)


export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
            <h1>Recettes</h1>
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
            <NewsletterSection /> 
        </div>
    )
}