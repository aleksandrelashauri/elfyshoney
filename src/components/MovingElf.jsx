import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import elfIcon from '../assets/elf.png';

const MovingElf = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFlying, setIsFlying] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Get header logo position
        const headerLogo = document.querySelector('.header-logo'); // Add this class to your header logo
        if (headerLogo) {
            const rect = headerLogo.getBoundingClientRect();
            // Set initial position to logo position
            setPosition({
                x: rect.left,
                y: rect.top
            });
        }

        // Start flying after a delay
        setTimeout(() => {
            setIsFlying(true);
            startRandomMovement();
        }, 2000);

    }, []);

    const startRandomMovement = () => {
        const moveInterval = setInterval(() => {
            const newX = Math.random() * (window.innerWidth - 50);
            const newY = Math.random() * (window.innerHeight - 50);
            setPosition({ x: newX, y: newY });
        }, 3000);

        return () => clearInterval(moveInterval);
    };

    const handleClick = () => {
        navigate('/1');
    };

    return (
        <div
            onClick={handleClick}
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                zIndex: 1000,
                transition: isFlying ? 'all 1.5s ease-in-out' : 'none',
                opacity: isFlying ? 1 : 0,
                transform: `scale(${isFlying ? 1 : 0.5})`,
            }}
        >
            <img
                src={elfIcon}
                alt="Moving Elf"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default MovingElf;