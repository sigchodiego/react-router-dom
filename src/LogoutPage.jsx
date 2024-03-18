import { useAuth } from "./auth";

export const LogoutPage = () => {
  const auth = useAuth();
  const logout = () => {
    // e.prevenDefault();
    auth.login(false);
  };

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={() => logout()}>
        <label>Escribe tu nombre de usuario</label>
        <input type="text" />
        <button type="submit">Salir</button>
      </form>
    </>
  );
};
