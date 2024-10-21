import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RecetteForm() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([
        {
            titre: "Spaghetti Bolognese",
            description: "Recette classique de spaghetti avec une sauce bolognese.",
            image: "https://via.placeholder.com/100",
        },
        {
            titre: "Salade César",
            description: "Salade avec des croûtons, du parmesan et de la sauce César.",
            image: "https://via.placeholder.com/100",
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newRecipe, setNewRecipe] = useState({ titre: "", description: "", image: "" });
    const [editingIndex, setEditingIndex] = useState(null);

    const saveRecipe = () => {
        if (newRecipe.titre.trim() && newRecipe.description.trim() && newRecipe.image.trim()) {
            if (editingIndex !== null) {
                const updatedRecipes = [...recipes];
                updatedRecipes[editingIndex] = newRecipe;
                setRecipes(updatedRecipes);
                setEditingIndex(null);
            } else {
                setRecipes([...recipes, newRecipe]);
            }

            setNewRecipe({ titre: "", description: "", image: "" });
            setShowForm(false);
        }
    };

    const deleteRecipe = async (index) => {
        const userId = "123"; // Remplacez par l'ID de l'utilisateur actuel
        const recipeId = recipes[index].id; // Assurez-vous que chaque recette a un `id` correspondant au backend
    
        try {
            const response = await axios.delete(`/api/recipes/${userId}/${recipeId}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                const updatedRecipes = [...recipes];
                updatedRecipes.splice(index, 1);
                setRecipes(updatedRecipes);
            } else {
                console.error("Erreur lors de la suppression de la recette");
            }
        } catch (error) {
            console.error("Erreur réseau : ", error);
        }
    };
    

    const editRecipe = (index) => {
        setEditingIndex(index);
        navigate('/edit-recipe', { state: { recipe: recipes[index] } });
    };
    

    const toggleForm = () => {
        setShowForm(!showForm);
        navigate('/create-recipe'); 
    };

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            marginBottom:'300px',
        },
        buttonRightContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
        },
        recipeItem: {
            marginBottom: '10px',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        deleteButton: {
            backgroundColor: 'var(--primary-color)',
        },
        editButton: {
            backgroundColor: 'var(--primary-color)',
        },
        input: {
            display: 'block',
            marginBottom: '10px',
            padding: '10px',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        image: {
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            marginRight: '10px',
        },
        title: {
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonRightContainer}>
                <button style={styles.button} onClick={toggleForm}>
                    {showForm ? "Annuler" : "Ajouter une recette"}
                </button>
            </div>

            {showForm && (
                <div>
                    <h2>{editingIndex !== null ? "Éditer la recette" : "Ajouter une nouvelle recette"}</h2>
                    <input
                        type="text"
                        placeholder="Titre de la recette"
                        value={newRecipe.titre}
                        onChange={(e) => setNewRecipe({ ...newRecipe, titre: e.target.value })}
                        style={styles.input}
                    />
                    <textarea
                        placeholder="Description de la recette"
                        value={newRecipe.description}
                        onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="URL de l'image"
                        value={newRecipe.image}
                        onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value })}
                        style={styles.input}
                    />
                    <button style={styles.button} onClick={saveRecipe}>
                        {editingIndex !== null ? "Mettre à jour la recette" : "Ajouter la recette"}
                    </button>
                </div>
            )}

            <h2 style={styles.title}>Vos Recettes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} style={styles.recipeItem}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={recipe.image} alt={recipe.titre} style={styles.image} />
                            <div>
                                <h3>{recipe.titre}</h3>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                        <div style={styles.buttonContainer}>
                            <button
                                style={{ ...styles.button, ...styles.deleteButton }}
                                onClick={() => deleteRecipe(index)}
                            >
                                Supprimer
                            </button>
                            <button
                                style={{ ...styles.button, ...styles.editButton }}
                                onClick={() => editRecipe(index)}
                            >
                                Éditer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
