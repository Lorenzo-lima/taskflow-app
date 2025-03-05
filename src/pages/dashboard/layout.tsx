import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full h-screen">
        <header className="flex w-full justify-between items-center border-b p-2">
          <SidebarTrigger />
          <ModeToggle />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
