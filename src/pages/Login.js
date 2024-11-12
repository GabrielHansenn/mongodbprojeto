import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from './Login.module.css';  // Importando o CSS modular

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redireciona para a página de posts após login
      window.location.href = "/posts";
    } catch (err) {
      setError("Erro ao fazer login!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
