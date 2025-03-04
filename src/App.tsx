import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "./components/theme-provider";
import TabsForm from './pages/auth/tabs-form';

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TabsForm />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
