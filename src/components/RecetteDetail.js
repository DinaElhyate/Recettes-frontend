import { useState } from 'react';
import RecipeCard from "../components/RecipeCard";
export default function RecetteDetail() {
    const recipeData = {
        titre: "Recette de test",
        description: "Ceci est une description de test.",
        dureePreparation: "10 minutes",
        dureeCuisson: "30 minutes",
        Proprietaire: "Ritchy Hallows",
        datePublication: "2024-10-19",
        tags: ["dîner", "végétarien"],
        ingredients: ["carottes", "pommes de terre"],
        etapes: [
            {
                titre: "Préparer le poulet",
                description: "Assaisonner les poitrines de poulet avec du sel, de l'ail en poudre, du poivre noir et du curry en poudre. Laisser mariner pendant au moins 30 minutes."
            },
            {
                titre: "Cuire le poulet",
                description: "Dans une poêle chaude, cuire les poitrines de poulet à feu moyen jusqu'à ce qu'elles soient bien dorées et cuites à cœur, environ 6-7 minutes de chaque côté. Retirer du feu et laisser refroidir avant de trancher finement."
            },
            {
                titre: "Préparer la dinde",
                description: "Assaisonner la poitrine de dinde avec du sel, de l'oignon en poudre et du paprika doux. Laisser mariner pendant 30 minutes."
            },
            {
                titre: "Cuire la dinde",
                description: "Dans la même poêle, cuire la poitrine de dinde jusqu'à ce qu'elle soit bien cuite, environ 7-8 minutes de chaque côté. Retirer du feu et laisser refroidir avant de trancher finement."
            },
            {
                titre: "Assembler la terrine",
                description: "Alterner les tranches de poulet et de dinde sur un plateau."
            }
        ],
        comments: ["Délicieux!", "À refaire."],
        authorId: "12345",
        image: "/img/top-chiefs/img_1.jpg" 
    };
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

    

    const [comments, setComments] = useState(recipeData.comments);
    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addComment = () => {
        if (newComment.trim() && name.trim() && email.trim()) {
            const comment = {
                text: newComment,
                name: name,
                email: email,
            };
            setComments([...comments, comment]);
            setNewComment(""); 
            setName(""); 
            setEmail("");
        }
    };

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
            <div style={styles.header}>
                <h1 style={styles.title}>{recipeData.titre}</h1> 
                <p>Recette par <strong>{recipeData.Proprietaire}</strong> | Publié le {recipeData.datePublication}</p>

                <img src={recipeData.image} alt={recipeData.titre} style={styles.image} />
                <div style={styles.info}>
                    <p><strong></strong> {recipeData.description}</p>
                    <div style={styles.durationContainer}>
                        <div style={styles.durationRow}>
                            <p style={styles.durationText}><strong>Temps de préparation :</strong></p>
                            <div style={styles.durationValueContainer}>
                                <p style={styles.durationValue}>{recipeData.dureePreparation}</p>
                            </div>
                        </div>
                        <div style={styles.durationRow}>
                            <p style={styles.durationText}><strong>Temps de cuisson :</strong></p>
                            <div style={styles.durationValueContainer}>
                                <p style={styles.durationValue}>{recipeData.dureeCuisson}</p>
                            </div>
                        </div>
                        <div style={styles.durationRow}>
                            <p style={styles.durationText}><strong>Temps total :</strong></p>
                            <div style={styles.durationValueContainer}>
                                <p style={styles.durationValue}></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>




            {/* Ingrédients */}
            <h2 style={styles.sectionTitle}>Ingrédients</h2>
            <ul style={styles.list}>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

             {/* Étapes */}
             <h2 style={styles.sectionTitle}>Étapes de préparation</h2>
            <div style={styles.list}>
                {recipeData.etapes.map((etape, index) => (
                    <div key={index}>
                        <p style={styles.stepTitle}>{etape.titre} :</p>
                        <p style={styles.stepDescription}>{etape.description}</p>
                    </div>
                ))}
            </div>

            {/* Commentaires */}
            <h2 style={styles.sectionTitle}>Commentaires</h2>
           

            {/* Formulaire de commentaire */}
            <label htmlFor="comment">Commentaire *</label>
            <textarea
                id="comment"
                style={styles.commentInput}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Votre commentaire"
            ></textarea>

            <label htmlFor="name">Nom *</label>
            <input
                id="name"
                type="text"
                style={styles.commentInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                required
            />

            <label htmlFor="email">Email *</label>
            <input
                id="email"
                type="email"
                style={styles.commentInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
            />

            <button  style={styles.submitButton} onClick={addComment}>Laisser un commentaire</button>

            {/* Affichage des commentaires */}
            <h2 style={styles.sectionTitle}>Commentaires</h2>
            <ul style={styles.list}>
                {comments.map((comment, index) => (
                    <li key={index} style={styles.commentItem}>
                        <strong>{comment.name}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
            <div>
                <h2 style={{ marginTop: '20px' }}>Vous pourrez aussi aimer</h2>
                <div className='recipes-container'>
                {recipes.slice(0, 3).map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
                </div>
            </div>

        </div>
    );
}
