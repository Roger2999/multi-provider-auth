import type { UsersResult } from "./type";
export const fetchUsers = async (URL_BASE: string): Promise<UsersResult> => {
  const response = await fetch(URL_BASE);
  if (!response.ok) {
    throw new Error(
      `Error en la respuesta ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
};
