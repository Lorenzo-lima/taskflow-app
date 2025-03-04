import { useTheme } from "@/components/theme-provider";
import Lottie from "react-lottie";
import loadingDark from "../assets/loading-dark.json";
import loadingWhite from "../assets/loading-white.json";

const LoadingPage = () => {
  const { theme } = useTheme();  // Obtém o tema atual do context

  const defaultOptions = {
    loop: true, // Animação em loop
    autoplay: true, // Começa automaticamente
    animationData: theme === "dark" ? loadingDark : loadingWhite, // Define a animação com base no tema
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme === "dark" ? "#0a0a0a" : "#fff", // Define o fundo com base no tema
        color: theme === "dark" ? "white" : "black", // Define a cor do texto com base no tema
        flexDirection: "column",
      }}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingPage;
