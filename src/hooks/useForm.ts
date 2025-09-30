import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../components/Forms/forms.model";
import { useForm } from "react-hook-form";

export const useRegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });
  return {
    control,
    handleSubmit,
    errors,
  };
};
export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  return {
    control,
    handleSubmit,
    errors,
  };
};
