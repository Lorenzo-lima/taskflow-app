import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import Login from "./login";
import Register from "./register";

function TabsForm() {
  return (
    <div className="flex flex-col w-full h-screen relative">
      <span className="absolute left-6 top-6">
        <ModeToggle />
      </span>
      <div className="flex mx-auto inset-0 h-screen justify-center items-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent
            value="login"
            className="flex flex-col border rounded-lg p-6"
          >
            <h1 className="leading-none font-semibold py-1">
              Bem-vindo de volta!
            </h1>
            <h2 className="text-muted-foreground text-sm pb-6">
              Insira suas credenciais aqui.
            </h2>
            <Login />
          </TabsContent>
          <TabsContent
            value="register"
            className="flex flex-col border rounded-lg p-6"
          >
            <h1 className="leading-none font-semibold py-1">
              Comece agora, crie sua conta!
            </h1>
            <h2 className="text-muted-foreground text-sm pb-6">
              Crie as suas credenciais aqui.
            </h2>
            <Register />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsForm;
