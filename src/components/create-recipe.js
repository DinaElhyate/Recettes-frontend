import { useState } from 'react';

export default function CreateRecipePage() {
    const [user, setUser] = useState({
        userId: "0edc5165-3b87-4c49-8db7-52b7d0edaf97",
        username: "john_doe",
        email: "john@example.com",
        password: "securepassword",
        role: "user",
        recipes: [],
        image: "http://example.com/user-image.jpg",
        _class: "com.Recettes.recettes.model.User",
    });

    const [newRecipe, setNewRecipe] = useState({
        title: "",
        description: "",
        image: "",
        ingredients: [""],
        instructions: [""],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...user,
            recipes: [...user.recipes, {
                recipeId: Math.random().toString(36).substr(2, 9),
                ...newRecipe
            }],
        };
        setUser(updatedUser);
        setNewRecipe({
            title: "",
            description: "",
            image: "",
            ingredients: [""],
            instructions: [""],
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewRecipe({ ...newRecipe, image: URL.createObjectURL(file) });
        }
    };

    return (
        <div className="recipe-page">
            <div className="recipe-container">
                <h2>Créer une nouvelle recette</h2>
                <form onSubmit={handleSubmit} className="recipe-form">
                    <input
                        type="text"
                        placeholder="Titre"
                        value={newRecipe.title}
                        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
                        className="input-field"
                    />
                    <textarea
                        placeholder="Description"
                        value={newRecipe.description}
                        onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                        className="input-field"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="input-field"
                    />
                    <div className="ingredients-section">
                        <div className="ingredients-header">
                            <h4>Ingrédients</h4>
                            <button
                                type="button"
                                onClick={() => setNewRecipe({ ...newRecipe, ingredients: [...newRecipe.ingredients, ""] })}
                                className="btn add-btn"
                            >
                                +
                            </button>
                        </div>
                        {newRecipe.ingredients.map((ingredient, index) => (
                            <div key={index} className="input-row">
                                <input
                                    type="text"
                                    placeholder={`Ingrédient ${index + 1}`}
                                    value={ingredient}
                                    onChange={(e) => {
                                        const updatedIngredients = [...newRecipe.ingredients];
                                        updatedIngredients[index] = e.target.value;
                                        setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
                                    }}
                                    className="input-field"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="instructions-section">
                        <div className="instructions-header">
                            <h4>Etapes</h4>
                            <button
                                type="button"
                                onClick={() => setNewRecipe({ ...newRecipe, instructions: [...newRecipe.instructions, ""] })}
                                className="btn add-btn"
                            >
                                +
                            </button>
                        </div>
                        {newRecipe.instructions.map((instruction, index) => (
                            <div key={index} className="input-row">
                                <input
                                    type="text"
                                    placeholder={`Instruction ${index + 1}`}
                                    value={instruction}
                                    onChange={(e) => {
                                        const updatedInstructions = [...newRecipe.instructions];
                                        updatedInstructions[index] = e.target.value;
                                        setNewRecipe({ ...newRecipe, instructions: updatedInstructions });
                                    }}
                                    className="input-field"
                                />
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="btn submit-btn">Ajouter la recette</button>
                </form>
            </div>
            <style jsx>{`
                .recipe-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 700px;
                    background-color: #f5f5f5;
                    margin-bottom: 500px;
                    margin-top: 30px;
                }
                .recipe-container {
                    width: 700px;
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    font-size: 1.5em;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .recipe-form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .input-field {
                    width: calc(100% - 40px);
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
                .input-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .btn {
                    padding: 10px;
                    background-color: #ff6b6b;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: transform 0.2s;
                }
                .btn:hover {
                    background-color: #ff4747;
                    transform: translateY(-2px);
                }
                .submit-btn {
                    margin-top: 20px;
                    align-self: flex-end;
                }
                .add-btn {
                    background-color: #4CAF50;
                    padding: 5px;
                    font-size: 1.5em;
                    line-height: 0;
                    margin-top: 0;
                }
                .ingredients-section,
                .instructions-section {
                    position: relative;
                }
                .ingredients-header {
                    display: flex;
                    align-items: center;
                    gap: 500px;
                }
                .instructions-header {
                    display: flex;
                    align-items: center;
                    gap: 535px;
                }
            `}</style>
        </div>
    );
}
