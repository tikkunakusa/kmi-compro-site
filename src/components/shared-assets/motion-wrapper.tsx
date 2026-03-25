"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * SSR-safe motion wrapper
 * - Prevent hydration mismatch
 * - Avoid Safari initial animation bug
 * - Ensure first render is visible
 */

export function MotionSafe({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // During SSR / first render → no animation (safe)
    if (!isMounted) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * Usage example:
 *
 * import { MotionSafe } from "@/components/MotionSafe";
 *
 * <MotionSafe>
 *   <h1>Hero Title</h1>
 * </MotionSafe>
 */
