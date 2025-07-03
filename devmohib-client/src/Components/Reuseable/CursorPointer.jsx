import { useMotionValue, useSpring, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CursorPointer = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY])

    return (
        <>
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999]"
                style={{
                    transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                }}
            ></div>

            {/* Outer circle that trails behind */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-blue-600 rounded-full pointer-events-none z-[9998]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            ></motion.div></>

    );
};

export default CursorPointer;