import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { Check } from 'lucide-react';
import './StyleIdentityScreen.css';

// Importing high-quality watercolor assets
import quietLuxuryNewImg from '../assets/illustrations/style_quiet_luxury.jpg';
import oldMoneyParisImg from '../assets/illustrations/style_old_money_paris.png';
import oldMoneyClassicImg from '../assets/illustrations/survey_modern_old_money.png';
import preppyImg from '../assets/illustrations/style_preppy.png';
import y2kImg from '../assets/illustrations/survey_y2k_streetwear.png';
import glamorousImg from '../assets/illustrations/survey_parisian_soft_glamour.png';
import darkAcademiaImg from '../assets/illustrations/survey_vintage_academia.png';
import coquetteImg from '../assets/illustrations/survey_soft_coquette.png';
import cottagecoreImg from '../assets/illustrations/style_feminine.jpg';
import bohoRevivalImg from '../assets/illustrations/style_boho_revival.png';
import desiBaddieImg from '../assets/illustrations/style_desi_baddie.png';
import streetFashionImg from '../assets/illustrations/survey_alt_streetwear.png';
import modernMinimalistImg from '../assets/illustrations/style_modern_minimalist.png';
import nycDowntownImg from '../assets/illustrations/style_nyc_downtown.png';

const styles = [
    {
        id: 'quiet-luxury',
        name: 'Quiet Luxury',
        image: quietLuxuryNewImg,
        desc: 'Understated opulence. Bias-cut silks, cashmere knits, and a palette of oat, cream, and sand.'
    },
    {
        id: 'old-money',
        name: 'Old Money',
        image: oldMoneyParisImg,
        desc: 'Heritage elegance. Refined stripes, structured trousers, and a legacy of effortless poise.'
    },
    {
        id: 'nyc-downtown',
        name: 'NYC Downtown Chic',
        image: nycDowntownImg,
        desc: 'Urban sophistication. Combining classic tailoring with a sharp, metropolitan edge.'
    },
    {
        id: 'y2k-siren',
        name: 'Y2K Siren',
        image: y2kImg,
        desc: 'Playful and provocative. Low-rise architecture and high-shine textures from the turn of the millennium.'
    },
    {
        id: 'minimalist',
        name: 'Modern Minimalist',
        image: modernMinimalistImg,
        desc: 'Architectural precision. Monochrome layers and clean, intentional lines that speak volumes.'
    },
    {
        id: 'soft-glamour',
        name: 'Soft Glamour',
        image: glamorousImg,
        desc: 'Luminous and luxe. Slip dresses and draped satins designed to celebrate the silhouette.'
    },
    {
        id: 'dark-academia',
        name: 'Dark Academia',
        image: darkAcademiaImg,
        desc: 'The moody intellectual. Tweed, deep palettes, and heritage-inspired tailoring.'
    },
    {
        id: 'desi-baddie',
        name: 'Desi Baddie',
        image: desiBaddieImg,
        desc: 'South Asian fusion with an edge. Traditional silhouettes reimagined through a modern, high-impact lens.'
    },
    {
        id: 'boho-revival',
        name: 'Boho Revival',
        image: bohoRevivalImg,
        desc: 'Artistic and grounded. Floor-sweeping lengths, layered textures, and a nomadic spirit.'
    },
    {
        id: 'street-fashion',
        name: 'Street Fashion',
        image: streetFashionImg,
        desc: 'Urban edge. High-impact silhouettes meeting the pulse of the pavement.'
    },
    {
        id: 'soft-romantic',
        name: 'Soft Romantic',
        image: cottagecoreImg,
        desc: 'Ethereal and poetic. Delicate laces, soft pastels, and a gentle, dream-like silhouette.'
    },
    {
        id: 'preppy',
        name: 'Preppy',
        image: preppyImg,
        desc: 'Collegiate elegance. Polished blazers, pleated skirts, and a sophisticated academic charm.'
    }
];

const StyleIdentityScreen = () => {
    const { styleIdentity, setStyleIdentity, setOnboardingStep } = useUser();

    const toggleStyle = (id) => {
        if (styleIdentity.includes(id)) {
            setStyleIdentity(styleIdentity.filter(s => s !== id));
        } else {
            setStyleIdentity([...styleIdentity, id]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="style-screen"
        >
            <div className="style-header">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="subtitle"
                >
                    Step 2 — Curating Your Vibe
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Your Style Identity
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Select the aesthetics that resonate with you. We use this to curate silhouettes that match your personal taste.
                </motion.p>
            </div>

            <div className="style-grid">
                {styles.map((style, index) => (
                    <motion.div
                        key={style.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -8 }}
                        className={`style-card ${styleIdentity.includes(style.id) ? 'selected' : ''}`}
                        onClick={() => toggleStyle(style.id)}
                    >
                        <div className="style-image-wrapper">
                            <img src={style.image} alt={style.name} />
                            <div className="card-overlay"></div>
                            {styleIdentity.includes(style.id) && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="selected-badge"
                                >
                                    <Check size={20} color="white" />
                                </motion.div>
                            )}
                        </div>
                        <div className="style-info">
                            <h3>{style.name}</h3>
                            <p>{style.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <footer className="style-footer">
                <button className="btn-secondary" onClick={() => setOnboardingStep(1)}>Back to Measurements</button>
                <div className="footer-right">
                    <span className="selection-count">
                        {styleIdentity.length} {styleIdentity.length === 1 ? 'style' : 'styles'} selected
                    </span>
                    <button
                        className="btn-primary"
                        disabled={styleIdentity.length === 0}
                        onClick={() => setOnboardingStep(3)}
                    >
                        See My Recommendations
                    </button>
                </div>
            </footer>
        </motion.div>
    );
};

export default StyleIdentityScreen;
