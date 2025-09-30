import { Controller, type Control, type FieldError } from "react-hook-form";
import "./CustomInput.css";
export type FormRegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
export type FormLoginValues = {
  email: string;
  password: string;
};
interface Props {
  control: Control<FormRegisterValues> | Control<FormLoginValues>;

  error: FieldError | undefined;
  type: string | undefined;
  name: "email" | "password" | "confirmPassword";
  label: string | undefined;
}
export const CustomInput = ({ control, type, name, label, error }: Props) => {
  const nameid = crypto.randomUUID();
  return (
    <>
      <div className="form-input flex flex-col w-full min-h-[88px]">
        <label htmlFor={`${name}-${nameid}`}>
          <span className="label">{label}</span>
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              {...field}
              id={`${name}-${nameid}`}
              type={type}
              className={`input w-full ${error ? "input input-error" : ""}`}
            />
          )}
        />

        {error && <p className="error text-red-400">{error.message}</p>}
      </div>
    </>
  );
};
