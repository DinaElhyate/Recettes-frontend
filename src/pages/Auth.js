import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { email, password }; // Connexion

    try {
      const url = isLogin ? 'http://localhost:8085/api/users/login' : 'http://localhost:8085/api/users';
      const response = await axios.post(url, userData);
      
      console.log('Réponse de l\'API :', response.data);
      navigate('/'); // Rediriger vers la page d'accueil après une connexion réussie

    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Mot de passe ou email incorrect');
      } else {
        setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
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
            {isLogin && (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
              </>
            )}
            <button type="submit" className="btn">
              {isLogin ? 'Connexion' : 'S’inscrire'}
            </button>
          </form>
          <div className="signup">
            <p>
              {isLogin ? (
                <span>Vous n'avez pas de compte ? <a href="#" onClick={() => setIsLogin(false)}>Inscrivez-vous</a></span>
              ) : (
                <span>Vous avez déjà un compte ? <a href="#" onClick={() => setIsLogin(true)}>Se connecter</a></span>
              )}
            </p>
          </div>
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
        .input-group input:focus + label, .input-group input:not(:placeholder-shown) + label {
          top: -10px;
          left: 10px;
          font-size: 0.8em;
          color: var(--primary-color);
        }
        .error-message {
          color: red; 
          font-size: 0.9em; 
          margin-top: 5px; 
        }
        .forgot-password {
          margin-top: 10px;
          text-align: right; 
        }
        .btn {
          width: 100%;
          padding: 10px;
          background-color: var(--primary-color);
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1em;
          cursor: pointer;
        }
        .btn:hover {
          background-color: darken(var(--primary-color), 10%);
        }
        .signup {
          margin-top: 20px;
          text-align: center; 
        }
        .signup a {
          color: var(--primary-color);
        }
        .description h3 {
          margin-bottom: 20px;
          font-size: 1.5em;
        }
        .description p {
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
