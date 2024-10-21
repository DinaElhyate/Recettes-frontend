import { Link, useLocation, useNavigate } from "react-router-dom"; // Importer useNavigate
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Définir navigate

    // État pour savoir si l'utilisateur est connecté
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        // Ici, tu devrais ajouter la logique de déconnexion (par exemple, supprimer le token d'authentification)
        setIsLoggedIn(false);
        navigate("/Auth"); // Rediriger vers la page de connexion après déconnexion
    };

    // Liens de navigation
    const links = [
        {
            name: "Acceuil",
            path: "/",
            icon: faHome,
        },
        {
            name: "Recettes",
            path: "/recipes",
            icon: faList,
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog,
        },
        // Liens conditionnels en fonction de l'état de connexion
        ...(isLoggedIn
            ? [
                  {
                      name: "Mon Compte",
                      path: "/account", // Change le chemin selon ta route
                      icon: faCog,
                  },
                  {
                      name: "Se déconnecter",
                      path: "/", // Change le chemin selon ta route
                      icon: faCog,
                      onClick: handleLogout, // Gérer la déconnexion
                  },
              ]
            : [
                  {
                      name: "Se connecter",
                      path: "/Auth",
                      icon: faCog,
                  },
              ]),
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    {links.map((link) => (
                        <Link
                            className={location.pathname === link.path ? "active" : ""}
                            to={link.path}
                            key={link.name}
                            onClick={link.onClick} // Ajoute ici le gestionnaire de clic pour se déconnecter
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    );
}
