import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 250 });
    const followerX = useSpring(0, { damping: 30, stiffness: 150 });
    const followerY = useSpring(0, { damping: 30, stiffness: 150 });

    useEffect(() => {
        const moveMouse = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            followerX.set(e.clientX - 20);
            followerY.set(e.clientY - 20);

            // Mouse tracking for bento cards (parallax effect)
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        const handleHover = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.3 : 1,
                }}
            />
            <motion.div
                className="custom-cursor-follower"
                style={{
                    x: followerX,
                    y: followerY,
                    scale: isHovering ? 1.5 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
