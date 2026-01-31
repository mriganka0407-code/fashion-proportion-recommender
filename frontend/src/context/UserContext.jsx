import React, { createContext, useContext, useState, useMemo } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [measurements, setMeasurements] = useState({
        height: 0,
        shoulderWidth: 0,
        bust: 0,
        waist: 0,
        hip: 0,
        torsoLength: 0,
        legLength: 0
    });

    const [styleIdentity, setStyleIdentity] = useState([]);
    const [surveyResults, setSurveyResults] = useState({}); // { styleId: totalScore }
    const [closet, setCloset] = useState([]); // List of clothing IDs owned
    const [onboardingStep, setOnboardingStep] = useState(0);

    const value = useMemo(() => ({
        measurements,
        setMeasurements,
        styleIdentity,
        setStyleIdentity,
        surveyResults,
        setSurveyResults,
        closet,
        setCloset,
        onboardingStep,
        setOnboardingStep
    }), [measurements, styleIdentity, surveyResults, closet, onboardingStep]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
