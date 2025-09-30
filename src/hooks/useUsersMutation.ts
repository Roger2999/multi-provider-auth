import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
import type { UserData } from "../components/Forms/types";
import { AuthStore } from "../stores/authStore";

export const useSignInUser = () => {
  const login = AuthStore((state) => state.login);
  const SingInMutation = useMutation({
    mutationFn: (data: UserData) => loginUser(data.email, data.password),
    onSuccess: (data, variables) => {
      login(variables.email, data.uid);
      alert(`Logeado: ${data.email}`);
      console.log(`Logeado: ${variables.email}`);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
  return { SingInMutation };
};
export const useCreateUser = () => {
  const CreateMutation = useMutation({
    mutationFn: (data: UserData) => registerUser(data.email, data.password),
    onSuccess: (data) => {
      alert(`Registrado: ${data.email}`);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
  return { CreateMutation };
};
