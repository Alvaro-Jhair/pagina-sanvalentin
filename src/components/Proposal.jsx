import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import PhotoGallery from './PhotoGallery';
import annoyedGif from '../assets/annoyed.gif'; // Import local image

export default function Proposal({ onSuccess }) {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);

    const phrases = [
        "No",
        "¿Estás segura amochito?",
        "¿De verdad?",
        "¡Piénsalo bien causa!",
        "Mira que me pondré triste...",
        "¡Muy triste!",
        "¡Lloraré!",
        "No seas así...",
        "¡Por lilo!",
        "¡Di que sí!",
    ];

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const handleYesClick = () => {
        setYesPressed(true);
        onSuccess && onSuccess(); // Notify parent to unlock scroll
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    if (yesPressed) {
        return (
            <div className="proposal-container success">
                <img
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    alt="Bears kissing"
                    className="main-image"
                />
                <h1 className="success-text">¡Siiiii! ¡Sabía que dirías que sí! ❤️</h1>
                <p className="date-reminder">Nos vemos el 14 de febrero, Mi Gordita. 🐱</p>

                <PhotoGallery />
            </div>
        );
    }

    return (
        <div className="proposal-container">
            <img
                className="main-image"
                src={annoyedGif}
                alt="Annoyed person waiting"
            />

            <h1 className="question-text">¿Quieres ser mi San Valentín?</h1>

            <div className="buttons-area">
                <button
                    className="yes-button"
                    style={{ fontSize: `${noCount * 20 + 16}px` }}
                    onClick={handleYesClick}
                >
                    Sí
                </button>

                <button
                    className="no-button"
                    onClick={handleNoClick}
                >
                    {getNoButtonText()}
                </button>
            </div>
        </div>
    );
}
