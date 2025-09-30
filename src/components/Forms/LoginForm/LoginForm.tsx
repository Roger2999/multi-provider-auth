import { CustomInput } from "../../Forms";

import type { UserData } from "../types";
import { useLoginForm } from "../../../hooks/useForm";
import { AuthStore } from "../../../stores/authStore";
import { useSignInUser } from "../../../hooks/useAuthPocket";

export const LoginForm = () => {
  const { control, errors, handleSubmit } = useLoginForm();
  const { SingInMutation } = useSignInUser();
  const { mutate, isError, error, isPending, data, variables } = SingInMutation;
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  const email = AuthStore((state) => state.email);
  const logout = AuthStore((state) => state.logout);

  const onFormSubmit = async (credentials: UserData) => {
    if (email === credentials.email && isAuthenticated) {
      alert("ya esta logeado");
      return;
    }
    mutate(credentials);
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center gap-5 h-80 mt-20">
        <h1 className=" font-mono font-extrabold text-2xl">Login:</h1>
        {data && <div>Bienvenido {variables.email}</div>}
        <div className="form-container w-[600px] max-w-[70%] h-[300px] flex justify-center items-center shadow-2xl">
          <form
            className="flex flex-col justify-center items-center w-[80%] h-full"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <CustomInput
              label={"Email"}
              type={"email"}
              name={"email"}
              control={control}
              error={errors.email}
            />
            <CustomInput
              label={"Contraseña"}
              type={"password"}
              name={"password"}
              control={control}
              error={errors.password}
            />
            {!isAuthenticated && (
              <button
                className="btn btn-neutral mt-4 mb-4"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Cargando..." : "Iniciar Sesión"}
              </button>
            )}

            {isAuthenticated && (
              <button
                className="btn btn-neutral mt-4 mb-4"
                type="button"
                onClick={logout}
              >
                {"Cerrar Sesion"}
              </button>
            )}

            <div className="error-submit text-red-500 mb-3 text-sm">
              {isError && `${error.message}`}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
