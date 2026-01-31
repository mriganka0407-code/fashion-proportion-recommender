import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import './StyleSurveyScreen.css';

// Placeholder mapping until images are provided
const surveyItems = [
    { id: 1, style: 'Classic', image: 'https://via.placeholder.com/600x800?text=Outfit+1' },
    { id: 2, style: 'Sporty', image: 'https://via.placeholder.com/600x800?text=Outfit+2' },
    { id: 3, style: 'Glamorous', image: 'https://via.placeholder.com/600x800?text=Outfit+3' },
    { id: 4, style: 'Preppy', image: 'https://via.placeholder.com/600x800?text=Outfit+4' },
    { id: 5, style: 'Grunge', image: 'https://via.placeholder.com/600x800?text=Outfit+5' },
    // ... will expand to 15-20 once user provides details
];

const ratings = [
    { label: 'Love it', value: 3, icon: '✨' },
    { label: 'Like it', value: 2, icon: '🌿' },
    { label: 'Okayish', value: 1, icon: '☕' },
    { label: 'Dislike', value: 0, icon: '✖️' },
];

const StyleSurveyScreen = () => {
    const { setStyleIdentity, setOnboardingStep } = useUser();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState({}); // { itemId: value }

    const currentItem = surveyItems[currentIndex];

    const handleRating = (value) => {
        const newResponses = { ...responses, [currentItem.id]: value };
        setResponses(newResponses);

        if (currentIndex < surveyItems.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            finalizeSurvey(newResponses);
        }
    };

    const finalizeSurvey = (finalResponses) => {
        // Basic logic: group by style and sum scores
        const styleScores = {};
        surveyItems.forEach(item => {
            const rating = finalResponses[item.id] || 0;
            styleScores[item.style] = (styleScores[item.style] || 0) + rating;
        });

        // Sort and get top 3
        const sortedStyles = Object.entries(styleScores)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([style]) => style);

        setStyleIdentity(sortedStyles);
        setOnboardingStep(3); // Move to recommendations
    };

    const progress = ((currentIndex + 1) / surveyItems.length) * 100;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="survey-screen"
        >
            <div className="survey-container container">
                <header className="survey-header">
                    <span className="subtitle">Step 3 — Style Intuition</span>
                    <h1>What resonates with you?</h1>
                    <div className="survey-progress">
                        <div className="progress-text">{currentIndex + 1} / {surveyItems.length}</div>
                        <div className="progress-track">
                            <motion.div
                                className="progress-bar"
                                animate={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </header>

                <main className="survey-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentItem.id}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            className="survey-card"
                        >
                            <div className="survey-image-wrapper">
                                <img src={currentItem.image} alt="Style Option" />
                                <div className="paper-texture"></div>
                            </div>

                            <div className="survey-actions">
                                <p className="survey-hint">How do you feel about this aesthetic?</p>
                                <div className="rating-grid">
                                    {ratings.map((r) => (
                                        <button
                                            key={r.label}
                                            className="rating-btn"
                                            onClick={() => handleRating(r.value)}
                                        >
                                            <span className="rating-icon">{r.icon}</span>
                                            <span className="rating-label">{r.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </motion.div>
    );
};

export default StyleSurveyScreen;
