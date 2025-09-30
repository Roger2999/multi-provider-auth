import { useMutation } from "@tanstack/react-query";
import { AuthStore } from "../stores/authStore";

import type { UserData } from "../components/Forms/types";
import {
  loginService,
  registerService,
} from "../services/authPocketBaseService";

export const useSignInUser = () => {
  const login = AuthStore((state) => state.login);
  const SingInMutation = useMutation({
    mutationFn: (data: UserData) => loginService(data.email, data.password),
    onSuccess: (data, variables) => {
      login(variables.email, data.token);
      alert(`Logeado: ${variables.email}`);
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
    mutationFn: (data: UserData) => registerService(data.email, data.password),
    onSuccess: (data, variables) => {
      alert(`Registrado: ${variables.email}${data.id}`);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
  return { CreateMutation };
};
