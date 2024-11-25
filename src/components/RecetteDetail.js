import { useState } from 'react';
import RecipeCard from "./RecipeCard";
export default function RecetteDetail() {
    const [recipe, setRecipe] = useState(null); // Initialiser recipe comme null
    const { userId, recipeId } = useParams();

    // Charger les données des recettes depuis une API
    useEffect(() => {
        async function fetchRecipe() {
            const response = await fetch(`http://localhost:8085/api/recipes/${userId}/${recipeId}`);
            const data = await response.json();
            setRecipe(data);
        }
        fetchRecipe();
    }, [userId, recipeId]);

    const styles = {
        
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            
            marginBottom: '20px',
        },
        image: { width: '100%', height: '400px', objectFit: 'cover', marginTop: '20px', },
       
        title: { fontSize: '2rem', fontWeight: 'bold', color: 'red',marginBottom:'10px', },
        info: {
            lineHeight: '1.6',
        },
        sectionTitle: {
            marginTop: '20px',
            marginBottom: '10px',
        },
        durationContainer: {
            marginTop: '20px',

            border: 'dashed red',
            padding: '10px',
            gridrow:'1',
            
        },
        durationRow: {
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '5px', 
            
        },
        durationText: {
            margin: '0', 
            fontSize: '16px',
            lineHeight: '1.5', 
        },
        durationValue: {
            margin: '0',
            fontSize: '16px', 
            lineHeight: '1.5',
            fontWeight: 'bold', 
        },
        list: {
            marginLeft: '20px',
        }, stepTitle: {
            fontWeight: 'bold',
            marginTop: '10px',
        },
        stepDescription: {
            marginLeft: '20px',
        },
        
        commentInput: {
            marginBottom: '10px',
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
       
        commentItem: {
            marginBottom: '10px',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
        },
        submitButton: {
            appearance: 'none',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            boxSizing: 'border-box',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '14px', 
            transition: 'background-color 0.3s ease',
        },  
        recipesContainer: {
            display: 'flex',               
            flexWrap: 'wrap',             
            justifyContent: 'space-between', 
            gap: '20px',                  
            margin: '20px 0',            
        },
    
        recipeCard: {
            flex: '1 1 calc(30% - 20px)', 
            maxWidth: '300px',            
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px',         
            overflow: 'hidden',           
            transition: 'transform 0.3s',  
        },
        
        recipeCardHover: {
            transform: 'scale(1.05)',     
        },
        
    };

    return (
        <div style={styles.container}>
            {recipe ? (
                <>
                    <div style={styles.header}>
                        <h1 style={styles.title}>{recipe.title}</h1>
                        <img src={recipe.image} alt={recipe.title} style={styles.image} />
                        <p style={styles.description}>{recipe.description}</p>
                    </div>

                    <div style={styles.ingredients}>
                        <h3>Ingrédients</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={styles.instructions}>
                        <h3>Instructions</h3>
                        <ol>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </>
            ) : (
                <p>Chargement de la recette...</p>
            )}
        </div>
    );
}
