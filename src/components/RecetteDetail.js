import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        container: { padding: '20px', textAlign: 'center' },
        header: { marginBottom: '20px' },
        title: { fontSize: '2em', fontWeight: 'bold' },
        image: { width: '300px', height: 'auto', marginTop: '20px' },
        description: { fontStyle: 'italic', marginBottom: '20px' },
        ingredients: { textAlign: 'left', marginBottom: '20px' },
        instructions: { textAlign: 'left' }
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
