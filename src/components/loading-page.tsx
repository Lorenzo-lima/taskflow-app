import Lottie from 'react-lottie';
import loadingBoxAnimation from '../assets/MainScene.json';

const LoadingPage = () => {
  const defaultOptions = {
    loop: true, // Animação em loop
    autoplay: true, // Começa automaticamente
    animationData: loadingBoxAnimation, // Dados da animação
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'oklch(0.145 0 0)',
        color: 'white',
        flexDirection: 'column',
      }}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingPage;
