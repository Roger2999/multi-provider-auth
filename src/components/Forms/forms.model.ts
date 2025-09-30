import z from "zod";

export const registerSchema = z
  .object({
    email: z.email("Email inválido").min(1, "Email obligatorio"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben ser iguales",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email("Email inválido").min(1, "Email obligatorio"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});
