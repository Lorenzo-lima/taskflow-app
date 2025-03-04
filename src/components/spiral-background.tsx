import Lottie from "react-lottie";
import { useTheme } from "./theme-provider";
import spiralDark from "../assets/spiral-lines-bg-dark.json";
import spiralWhite from "../assets/spiral-lines-bg-white.json";

const SpiralBackground = () => {
  const { theme } = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: theme === "dark" ? spiralDark : spiralWhite,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
      <Lottie
        options={defaultOptions}
        height={1000}
        width={1000}
        speed={0.5}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default SpiralBackground;
