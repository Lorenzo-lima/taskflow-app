import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import { Login } from "./login";
import Register from "./register";
import { useState } from "react";
import { TypographyH4 } from "@/components/typography/typography-h4";
import { TypographyH1 } from "@/components/typography/typography-h1";
import "./styles.css";
import SpiralBackground from "@/components/spiral-background";

function TabsForm() {
  const [tabValue, setTabValue] = useState("login");

  return (
    <div className="flex flex-col w-full h-screen relative mx-auto overflow-hidden">
      <span className="absolute left-6 top-6">
        <ModeToggle />
      </span>
      <SpiralBackground />
      <div className="flex flex-col justify-between items-center mt-10">
        <div>
          <TypographyH1 animationClass="typing-animation text-center lg:text-7xl my-22">
            Organize suas tarefas com Task Flow!
          </TypographyH1>
        </div>

        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          className="w-[400px]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Registrar</TabsTrigger>
          </TabsList>
          <TabsContent
            value="login"
            className="flex flex-col border rounded-lg backdrop-blur-md p-6"
          >
            <TypographyH4>Bem-vindo de volta!</TypographyH4>
            <h2 className="text-muted-foreground text-sm pb-6">
              Insira suas credenciais aqui.
            </h2>
            <Login />
          </TabsContent>
          <TabsContent
            value="register"
            className="flex flex-col border rounded-lg backdrop-blur-md p-6"
          >
            <TypographyH4>Primeira vez? Registre-se!</TypographyH4>
            <h2 className="text-muted-foreground text-sm pb-6">
              Crie as suas credenciais aqui.
            </h2>
            <Register onRegisterSuccess={() => setTabValue("login")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsForm;
