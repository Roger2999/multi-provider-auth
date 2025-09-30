import { UserCard } from "./components/UserCard/UserCard";
import { useUsers } from "./hooks/useUsers";
import "./App.css";
export const App = () => {
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const SEED = import.meta.env.VITE_SEED;

  //const URL_BASE = https://randomuser.me/api/?seed=myseed&results=50";
  const { data, isLoading, isError, error } = useUsers(
    `${URL_BASE}?seed=${SEED}&results=50`
  );
  return (
    <>
      <h1>Listado de usuarios:</h1>
      <ul>
        {isLoading
          ? "Cargando..."
          : isError
          ? `Ha ocurrio un error: ${error}`
          : data?.results.map((user) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
      </ul>
      {data?.results.length == 0 && <h2>No hay usuarios para mostrar</h2>}
    </>
  );
};
