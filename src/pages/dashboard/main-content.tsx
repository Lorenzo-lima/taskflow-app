import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full h-screen p-4">
        <header className="flex w-full justify-between">
          <SidebarTrigger />
          <ModeToggle />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
