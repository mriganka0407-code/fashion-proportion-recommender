import React from 'react';
import { useUser } from './context/UserContext';
import WelcomeScreen from './pages/WelcomeScreen';
import MeasurementScreen from './pages/MeasurementScreen';
import StyleIdentityScreen from './pages/StyleIdentityScreen';
import RecommendationScreen from './pages/RecommendationScreen';

function App() {
  const { onboardingStep } = useUser();

  const renderStep = () => {
    switch (onboardingStep) {
      case 0:
        return <WelcomeScreen />;
      case 1:
        return <MeasurementScreen />;
      case 2:
        return <StyleIdentityScreen />;
      case 3:
        return <RecommendationScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="app-container">
      {renderStep()}
    </div>
  );
}

export default App;
