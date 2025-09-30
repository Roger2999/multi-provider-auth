import { pb } from "../pocketBaseConf/pocketBase";

export const loginService = async (email: string, password: string) => {
  const response = await pb
    .collection("users")
    .authWithPassword(email, password);
  return response;
};
export const registerService = async (email: string, password: string) => {
  const dataUser = {
    email: email,
    password: password,
    passwordConfirm: password,
  };
  const response = await pb.collection("users").create(dataUser);
  return response;
};
