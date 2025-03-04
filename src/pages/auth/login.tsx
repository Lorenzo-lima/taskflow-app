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
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface LoginResponse {
  token: string;
}

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});

type LoginForm = z.infer<typeof loginSchema>;

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setErrorMessage("");
    try {
      const response = await api.post<LoginResponse>("/auth/login", data);

      const token = response.data.token;

      Cookies.set("token", token, { expires: 1 });

      navigate("/dashboard");
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrorMessage(
          err.response?.data?.error || "Erro desconhecido no servidor."
        );
      } else {
        setErrorMessage("Erro ao conectar ao servidor. Tente novamente.");
      }
      console.error("Erro ao fazer login:", err);
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
              <FormDescription className="text-center">
                {errorMessage}
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer">
          Entrar
        </Button>
      </form>
    </Form>
  );
}

export default Login;
