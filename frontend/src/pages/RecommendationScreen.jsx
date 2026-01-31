import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { calculateRatios } from '../ratios/calculateRatios';
import { classifyStructure } from '../logic/classifyStructure';
import { scoreClothingItems } from '../logic/scoreClothingItems';
import { Bookmark, Info, ShoppingBag, Sparkles } from 'lucide-react';
import necklineCollage from '../assets/illustrations/neckline_collage.png';
import bottomsCollage from '../assets/illustrations/bottoms_collage.jpg';
import './RecommendationScreen.css';

const necklineMapping = {
    101: { r: 1, c: 1 }, // v-neck
    102: { r: 5, c: 5 }, // deep-v (Plunge)
    103: { r: 5, c: 5 }, // plunging (Plunge)
    104: { r: 5, c: 4 }, // surplice
    105: { r: 0, c: 2 }, // u-neck (Scoop)
    106: { r: 0, c: 2 }, // scoop
    107: { r: 5, c: 2 }, // keyhole
    108: { r: 0, c: 4 }, // square
    109: { r: 0, c: 1 }, // sweetheart
    110: { r: 1, c: 2 }, // queen-anne
    111: { r: 0, c: 4 }, // apron (Square)
    112: { r: 3, c: 3 }, // crew (Raglan Crew)
    113: { r: 5, c: 1 }, // round (T-Shirt)
    114: { r: 2, c: 1 }, // boat (Bateau)
    115: { r: 0, c: 3 }, // jewel
    116: { r: 5, c: 0 }, // mock (Tight Neck)
    117: { r: 1, c: 4 }, // turtleneck
    118: { r: 1, c: 3 }, // halter
    119: { r: 6, c: 5 }, // one-shoulder (Drape)
    120: { r: 0, c: 5 }, // asymmetrical (Asymmetric)
    121: { r: 1, c: 6 }, // off-shoulder
    122: { r: 2, c: 4 }, // cowl
    123: { r: 1, c: 5 }, // illusion
    124: { r: 4, c: 2 }, // tie-neck (Sailor/Collar)
    125: { r: 0, c: 6 }, // strapless (Straight Across)
    126: { r: 2, c: 0 }, // scalloped (Scallop)
};

const bottomsMapping = {
    // Row indices: 1-4, Column indices: 0-6
    201: { r: 3, c: 0 }, // skinny-jeans -> Skinny
    205: { r: 3, c: 1 }, // straight-jeans -> Straight
    211: { r: 1, c: 3 }, // baggy-jeans -> Baggy
    212: { r: 3, c: 5 }, // wide-leg-jeans -> Wide Leg
    216: { r: 3, c: 4 }, // flare-jeans -> Flared
    230: { r: 4, c: 1 }, // utility-cargos -> Cargo
    231: { r: 1, c: 1 }, // parachute-pants -> Harem
    232: { r: 2, c: 0 }, // trouser-pants -> Trouser
    233: { r: 3, c: 2 }, // tapered-chinos -> Tapered
    240: { r: 3, c: 6 }, // slip-midi-skirt -> Culottes
    250: { r: 3, c: 4 }, // flare-leggings -> Flared
    251: { r: 4, c: 4 }, // baggy-joggers -> Jogger
};

const RecommendationScreen = () => {
    const { measurements, styleIdentity, closet, setCloset } = useUser();

    const recommendations = useMemo(() => {
        const ratios = calculateRatios(measurements);
        const structure = classifyStructure(ratios);
        return scoreClothingItems(structure);
    }, [measurements]);

    const toggleOwned = (id) => {
        setCloset(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const OutfitCard = ({ item, matchScore, explanations }) => {
        const isOwned = closet.includes(item.id);

        return (
            <motion.div layout className={`outfit-card ${isOwned ? 'owned' : ''}`}>
                <div className="card-image-section">
                    <div className="match-badge">{matchScore}% Match</div>
                    <div className="item-illustration-container">
                        {item.featureType === 'neckline' && necklineMapping[item.id] ? (
                            <div
                                className="item-illustration illustration-neckline"
                                style={{
                                    backgroundImage: `url(${necklineCollage})`,
                                    backgroundPosition: `${(necklineMapping[item.id].c / 6) * 100}% ${(necklineMapping[item.id].r / 6) * 100}%`
                                }}
                            />
                        ) : item.category === 'bottom' && bottomsMapping[item.id] ? (
                            <div
                                className="item-illustration illustration-bottom"
                                style={{
                                    backgroundImage: `url(${bottomsCollage})`,
                                    backgroundPosition: `${(bottomsMapping[item.id].c / 6) * 100}% ${(bottomsMapping[item.id].r / 4) * 100 + 10}%`
                                }}
                            />
                        ) : (
                            <div className="item-illustration-placeholder">
                                <div className="sketch-texture"></div>
                                <span className="placeholder-text">{item.value.replace(/-/g, ' ')}</span>
                            </div>
                        )}
                        <div className="watercolor-wash"></div>
                    </div>
                </div>

                <div className="card-content">
                    <header className="card-header">
                        <span className="item-category">{item.featureType}</span>
                        <h3>{item.value.replace(/-/g, ' ')}</h3>
                    </header>

                    <div className="item-attributes">
                        {item.category === 'top' ? (
                            <>
                                <div className="attr-row">
                                    <span className="attr-label">Composition:</span>
                                    <span className="attr-value">{item.attributes.color}, {item.attributes.fit} fit, {item.attributes.sleeve} sleeve</span>
                                </div>
                                <div className="attr-row">
                                    <span className="attr-label">Aesthetic:</span>
                                    <span className="attr-value">{item.attributes.print === 'none' ? 'Solid color' : `${item.attributes.print} print (${item.attributes.printType})`}</span>
                                </div>
                                <div className="attr-row">
                                    <span className="attr-label">Cut:</span>
                                    <span className="attr-value">{item.attributes.length} length</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="attr-row">
                                    <span className="attr-label">Architecture:</span>
                                    <span className="attr-value">{item.attributes.color}, {item.attributes.rise} rise</span>
                                </div>
                                <div className="attr-row">
                                    <span className="attr-label">Details:</span>
                                    <span className="attr-value">{item.attributes.design}, {item.attributes.wash}</span>
                                </div>
                            </>
                        )}
                    </div>

                    <ul className="logic-list">
                        {explanations.map((exp, i) => (
                            <li key={i}><Info size={14} className="info-icon" /> {exp}</li>
                        ))}
                    </ul>

                    <div className="card-actions">
                        <label className="closet-toggle">
                            <input
                                type="checkbox"
                                checked={isOwned}
                                onChange={() => toggleOwned(item.id)}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="toggle-label">I already own something like this</span>
                        </label>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="recommendation-screen">
            <header className="rec-header">
                <div className="container">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="subtitle">Curated for you</motion.span>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Your Silhouette Strategy</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="stylist-intro">
                        Based on your proportions, we’ve selected pieces that work beautifully for you.
                        These choices focus on intentional lines and balanced weight.
                    </motion.p>
                </div>
            </header>

            <main className="container rec-layout">
                <div className="rec-main-content">
                    <section className="category-section">
                        <div className="section-title">
                            <Sparkles size={20} className="section-icon" />
                            <h2>Tops & Proportions</h2>
                        </div>
                        <div className="outfit-grid">
                            {recommendations.top.filter(r => r.matchScore > 50).slice(0, 4).map(rec => (
                                <OutfitCard key={rec.item.id} {...rec} />
                            ))}
                        </div>
                    </section>

                    <section className="category-section">
                        <div className="section-title">
                            <Sparkles size={20} className="section-icon" />
                            <h2>Bottoms & Structure</h2>
                        </div>
                        <div className="outfit-grid">
                            {recommendations.bottom.filter(r => r.matchScore > 50).slice(0, 4).map(rec => (
                                <OutfitCard key={rec.item.id} {...rec} />
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="capsule-sidebar">
                    <div className="capsule-coach-card">
                        <ShoppingBag size={24} className="coach-icon" />
                        <h3>Capsule Progress</h3>
                        <p>You own <strong>{closet.length}</strong> core items.</p>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${Math.min(100, (closet.length / 8) * 100)}%` }}></div>
                        </div>
                        <p className="coach-note small">Focus on adding one high-quality piece at a time.</p>
                    </div>
                </aside>
            </main>
        </motion.div>
    );
};

export default RecommendationScreen;
