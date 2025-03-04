import api from "../../services/axios";
import { useState } from "react";
import { AxiosError } from "axios";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Nome de usuário deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirm_password: z
      .string()
      .min(6, { message: "Confirmação de senha obrigatória" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

function Register({ onRegisterSuccess }: { onRegisterSuccess: () => void }) {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    setErrorMessage("");
    try {
      await api.post("/auth/register", data);
      onRegisterSuccess();
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrorMessage(
          err.response?.data?.error || "Erro desconhecido no servidor."
        );
      } else {
        setErrorMessage("Erro ao conectar ao servidor. Tente novamente.");
      }
      console.error("Erro ao registrar:", err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de Usuário</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirme sua senha"
                  {...field}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription className="text-center">
          {errorMessage}
        </FormDescription>
        <Button type="submit" className="cursor-pointer">
          Registrar
        </Button>
      </form>
    </Form>
  );
}

export default Register;
