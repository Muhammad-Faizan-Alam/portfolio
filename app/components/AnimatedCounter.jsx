'use client';
import { useEffect, useState } from "react";

const AnimatedCounter = ({ from, to, duration }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let start = from;
        const increment = (to - from) / (duration * 60); // 60fps

        const timer = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));
            if (start >= to) {
                setCount(to);
                clearInterval(timer);
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [from, to, duration]);

    return <span>{count}</span>;
};

export default AnimatedCounter;