import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import TabsForm from "./pages/auth/tabs-form";
import Dashboard from "./pages/dashboard/main-content";
import AuthMiddleware from "./middlewares/auth-middleware";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TabsForm />} />
          <Route
            path="/*"
            element={
              <AuthMiddleware>
                <Dashboard />
              </AuthMiddleware>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
