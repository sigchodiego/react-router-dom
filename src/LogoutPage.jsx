import { useState } from "react";

export const LogoutPage = () => {
  const [username, setUsername] = useState("");
  const logout = () => {
    // e.prevenDefault();
    console.log("salida exitosa");
  };

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={() => logout()}>
        <label>Escribe tu nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Salir</button>
      </form>
    </>
  );
};
