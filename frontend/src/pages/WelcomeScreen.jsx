import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import heroImg from '../assets/illustrations/hero_cafe.png';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
    const { setOnboardingStep } = useUser();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="welcome-screen"
        >
            <div className="welcome-content">
                <header className="brand-header">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0.1em' }}
                        animate={{ opacity: 1, letterSpacing: '0.2em' }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className="brand-tagline"
                    >
                        Quiet Luxury • Intentional Styling
                    </motion.span>
                </header>

                <div className="hero-section">
                    <div className="hero-image-container">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="hero-image-wrapper"
                        >
                            <img
                                src={heroImg}
                                alt="Personal Stylist Illustration"
                                className="hero-image"
                            />
                            <div className="watercolor-overlay"></div>
                        </motion.div>
                    </div>

                    <div className="hero-text">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        >
                            The Architecture <br />of Your Style
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 1 }}
                        >
                            Welcome to a more intentional way of dressing. We use the logic of your proportions to help you curate a capsule wardrobe that feels second-nature.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="cta-wrapper"
                        >
                            <button
                                className="btn-primary"
                                onClick={() => setOnboardingStep(1)}
                            >
                                Begin Your Consultation
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
