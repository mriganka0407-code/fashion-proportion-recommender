import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './MeasurementScreen.css';

const steps = [
    { id: 'height', label: 'Height', description: 'Your overall height helps us establish the vertical foundation of your silhouette.', min: 140, max: 210, unit: 'cm' },
    { id: 'shoulderWidth', label: 'Shoulder Width', description: 'Measure from one shoulder point to the other across your back.', min: 30, max: 60, unit: 'cm' },
    { id: 'bust', label: 'Bust', description: 'Measure around the fullest part of your chest.', min: 70, max: 140, unit: 'cm' },
    { id: 'waist', label: 'Natural Waist', description: 'Locate the narrowest part of your torso, usually just above the navel.', min: 50, max: 120, unit: 'cm' },
    { id: 'hip', label: 'Full Hip', description: 'Measure around the widest part of your lower frame.', min: 70, max: 150, unit: 'cm' },
    { id: 'torsoLength', label: 'Torso Length', description: 'Measure from the base of your neck to your natural waistline.', min: 30, max: 60, unit: 'cm' },
    { id: 'legLength', label: 'Inseam', description: 'Measure from the highest point of your inner thigh to your ankle bone.', min: 60, max: 100, unit: 'cm' },
];

const MeasurementScreen = () => {
    const { measurements, setMeasurements, setOnboardingStep } = useUser();
    const [currentIdx, setCurrentIdx] = useState(0);
    const currentStep = steps[currentIdx];

    const handleNext = () => {
        if (currentIdx < steps.length - 1) {
            setCurrentIdx(currentIdx + 1);
        } else {
            setOnboardingStep(2);
        }
    };

    const handleBack = () => {
        if (currentIdx > 0) {
            setCurrentIdx(currentIdx - 1);
        } else {
            setOnboardingStep(0);
        }
    };

    const updateMeasurement = (val) => {
        setMeasurements({ ...measurements, [currentStep.id]: parseFloat(val) || 0 });
    };

    const progress = ((currentIdx + 1) / steps.length) * 100;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="measurement-screen"
        >
            <div className="measurement-layout container">
                <aside className="measurement-sidebar">
                    <div className="progress-section">
                        <span className="step-counter">Step {currentIdx + 1} of {steps.length}</span>
                        <div className="progress-track">
                            <motion.div
                                className="progress-bar"
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    <div className="measurement-intro">
                        <h2>Let’s understand your proportions.</h2>
                        <p>Accuracy allows us to offer more intentional recommendations. Use a flexible tape and breathe naturally.</p>
                    </div>
                </aside>

                <main className="measurement-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.id}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -30, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="measurement-step-content"
                        >
                            <div className="input-group">
                                <span className="measurement-label">{currentStep.label}</span>
                                <p className="measurement-desc">{currentStep.description}</p>

                                <div className="input-wrapper">
                                    <input
                                        type="number"
                                        value={measurements[currentStep.id] || ''}
                                        onChange={(e) => updateMeasurement(e.target.value)}
                                        placeholder={currentStep.min}
                                        autoFocus
                                    />
                                    <span className="unit">{currentStep.unit}</span>
                                </div>
                            </div>

                            <div className="form-nav">
                                <button className="btn-secondary" onClick={handleBack}>
                                    <ChevronLeft size={16} /> Back
                                </button>
                                <button className="btn-primary" onClick={handleNext}>
                                    {currentIdx === steps.length - 1 ? "Save Preferences" : "Continue"} <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </motion.div>
    );
};

export default MeasurementScreen;
