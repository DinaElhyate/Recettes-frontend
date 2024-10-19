import CustomImage from "./CustomImage"
import { useNavigate } from 'react-router-dom'; 

export default function RecipeCard({recipe}){
    const navigate = useNavigate(); 
    const goToDetailPage = () => {
        navigate('/RecetteDetail'); 
    };

    return (
        <div className="recipe-card"   onClick={goToDetailPage} >
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                
            </div>
        </div>
    )
}