import { useState } from "react";
import { useAuth } from "./auth.jsx";

export const LoginPage = () => {
  const auth = useAuth();
  console.log(auth);
  const [username, setUsername] = useState("");
  const login = () => {
    // e.prevenDefault();
    auth.login({ username });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={() => login()}>
        <label>Escribe tu nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
