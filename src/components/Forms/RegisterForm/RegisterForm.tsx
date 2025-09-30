import { useCreateUser } from "../../../hooks/useAuthPocket";
import { useRegisterForm } from "../../../hooks/useForm";
import { CustomInput } from "../../Forms";
import type { UserData } from "../types";

export const RegisterForm = () => {
  const { control, errors, handleSubmit } = useRegisterForm();
  const { CreateMutation } = useCreateUser();
  const { mutate, isError, error, isPending } = CreateMutation;
  const onFormSubmit = async (data: UserData) => {
    mutate(data);
  };
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center gap-5 h-80 mt-20">
        <h1 className=" font-mono font-extrabold text-2xl">Registro:</h1>
        <div className="form-container w-[600px] max-w-[70%] flex justify-center items-center shadow-2xl">
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
            <CustomInput
              label={"Confrimar contraseña"}
              type={"password"}
              name={"confirmPassword"}
              control={control}
              error={errors.confirmPassword}
            />
            <button
              className="btn btn-neutral mt-4 mb-4"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Cargando..." : "Registrarse"}
            </button>
            <div className="error-submit error-submit text-sm text-red-500 mb-3">
              {isError && `${error.message}`}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
