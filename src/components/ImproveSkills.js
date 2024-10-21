import { useNavigate } from "react-router-dom";

export default function ImproveSkills() {
    const navigate = useNavigate();
    const list = [
        "Apprenez de nouvelles recettes",
        "Expérimentez avec la cuisine",
        "Écrivez vos propres recettes",
        "Découvrez les informations nutritionnelles",
        "Obtenez des conseils de cuisine",
        "Classez-vous",
    ];

    const handleExploreClick = () => {
        navigate('/auth');
    };

    return (
        <div className="section improve-skills">
            <style>
                {`
                    .improve-skills .col.img img {
                        width: 100%; /* L'image prend toute la largeur de la colonne */
                        max-width: 500px; /* Limite la largeur maximale de l'image à 200px */
                        height: auto; /* Conserve le ratio d'aspect de l'image */
                    }
                `}
            </style>
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Améliorez vos compétences culinaires</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn" onClick={handleExploreClick}>Inscrivez-vous maintenant</button>
            </div>
        </div>
    );
}
