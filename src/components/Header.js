import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // Définition des styles
    const headerStyle = {
        position: 'relative',
        width: '100vw', // Utilise 100% de la largeur de la fenêtre
        height: '400px', // Ajustez la hauteur selon vos besoins
        display: 'flex',
        justifyContent: 'center', // Centre le contenu horizontalement
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden', // Assure que rien ne dépasse
        margin: '0', // Retire les marges par défaut
        padding: '0', // Retire le padding par défaut
        boxSizing: 'border-box', // Inclut le padding et la bordure dans la largeur et la hauteur
    };

    const backgroundStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0, // Assure que l'image est en arrière-plan
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Légère transparence noire
        zIndex: 1, // Au-dessus de l'image
    };

    const logoStyle = {
        zIndex: 2, // Pour s'assurer que le texte est au-dessus de l'overlay
        position: 'relative', // Pour le placer par rapport à l'overlay
        fontSize: '3em',
        fontWeight: 'bold',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'color 0.3s ease',
    };

    return (
        <header style={headerStyle}>
            <div style={backgroundStyle}></div> {/* Image de fond */}
            <div style={overlayStyle}></div> {/* Overlay pour assombrir l'image */}
            <div style={logoStyle}>
                <Link to="/" style={linkStyle}>Foodie</Link>
            </div>
        </header>
    );
};

export default Header;
