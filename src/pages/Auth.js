import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
  const navigate = useNavigate(); // Initialiser useNavigate
  const [emailOrPhoneFocused, setEmailOrPhoneFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const userData = {
      username,
      email,
      password
    };
  
    console.log('Données envoyées :', userData);
  
    try {
      const response = await axios.post('http://localhost:8085/api/users', userData);
      console.log('Utilisateur créé avec succès :', response.data);

      // Rediriger vers la page d'accueil après une création réussie
      navigate('/'); // Remplacez '/home' par le chemin correct de votre page d'accueil
    } catch (error) {
      console.error('Erreur lors de la création de l’utilisateur :', error);
      if (error.response) {
        console.error('Détails de la réponse d\'erreur :', error.response.data);
        console.error('Statut de la réponse :', error.response.status);
      }
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="login-form">
          <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
          <h2>{isLogin ? 'Se connecter' : 'Inscription'}</h2>
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    id="email-or-phone"
                    placeholder=" "
                    onFocus={() => setEmailOrPhoneFocused(true)}
                    onBlur={() => setEmailOrPhoneFocused(false)}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <label htmlFor="email-or-phone" className={emailOrPhoneFocused ? 'focused' : ''}>
                    Email ou téléphone
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    id="username"
                    placeholder=" "
                    onFocus={() => setUsernameFocused(true)}
                    onBlur={() => setUsernameFocused(false)}
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                  <label htmlFor="username" className={usernameFocused ? 'focused' : ''}>
                    Nom d'utilisateur
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    id="password"
                    placeholder=" "
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  <label htmlFor="password" className={passwordFocused ? 'focused' : ''}>
                    Mot de passe
                  </label>
                </div>
                <div className="forgot-password">
                  <a href="/forgot-password">Mot de passe oublié ?</a>
                </div>
              </>
            ) : (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    id="new-username"
                    placeholder=" "
                    onFocus={() => setUsernameFocused(true)}
                    onBlur={() => setUsernameFocused(false)}
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                  <label htmlFor="new-username" className={usernameFocused ? 'focused' : ''}>
                    Nom d'utilisateur
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    id="new-email"
                    placeholder=" "
                    onFocus={() => setEmailOrPhoneFocused(true)}
                    onBlur={() => setEmailOrPhoneFocused(false)}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <label htmlFor="new-email" className={emailOrPhoneFocused ? 'focused' : ''}>
                    Email
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    id="new-password"
                    placeholder=" "
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  <label htmlFor="new-password" className={passwordFocused ? 'focused' : ''}>
                    Mot de passe
                  </label>
                </div>
              </>
            )}
            <button type="submit" className="btn">
              {isLogin ? 'Connexion' : 'S’inscrire'}
            </button>
          </form>
          <div className="signup">
            <p>
              {isLogin ? (
                <>
                  Vous n'avez pas de compte ? <a href="#" onClick={() => setIsLogin(false)}>Inscrivez-vous</a>
                </>
              ) : (
                <>
                  Vous avez déjà un compte ? <a href="#" onClick={() => setIsLogin(true)}>Se connecter</a>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="description">
          <h3>Nous sommes plus qu'une simple entreprise</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <style jsx>{`
        .auth-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 700px;
          background-color: #f5f5f5;
          margin-bottom: 500px;
          margin-top: 30px;
        }
        .logo {
          font-size: 1.5em;
          font-weight: bolder;
          align-items: center;
          color: var(--primary-color);
          text-shadow: 0 1px 3px var(--shadow-color);
        }
        .logo span {
          color: var(--text-color);
        }
        .auth-container {
          display: flex;
          max-width: 800px;
          width: 100%;
          height: 600px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .login-form, .description {
          flex: 1;
          padding: 20px;
        }
        .login-form {
          border-right: 1px solid #ccc; 
        }
        .login-form h2 {
          margin-top: 80px;
          margin-bottom: 20px;
          font-size: 1.2em; 
          font-weight: normal;
          text-align: center;
        }
        .input-group {
          position: relative;
          margin-bottom: 20px; 
          text-align: left;
        }
        .input-group label {
          position: absolute;
          left: 10px;
          top: 10px;
          font-size: 1em;
          color: #999;
          transition: 0.2s ease all;
        }
        .input-group input {
          width: 100%;
          padding: 10px;
          font-size: 1em;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .input-group input:focus {
          border-color: var(--primary-color);
          outline: none;
        }
        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          top: -10px;
          left: 10px;
          font-size: 0.8em;
          color: var(--primary-color);
        }
        .forgot-password {
          text-align: right;
          margin-top: 10px;
        }
        .signup {
          text-align: center;
          margin-top: 20px;
        }
        .description {
          text-align: center;
          padding-left: 40px;
          background-color: var(--primary-color);
          color:white;
        }
        .description h3 {
          margin-top: 100px;
        }
        .description p {
          font-size: 0.9em;
           margin-top: 50px;
             color:white;
        }
        .btn {
          width: 100%;
          padding: 10px;
          font-size: 1em;
          color: white;
          background-color: var(--primary-color);
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: darken(var(--primary-color), 10%);
        }
      `}</style>
    </div>
  );
}
