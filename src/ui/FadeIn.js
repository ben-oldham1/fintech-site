"use client"

import { motion } from "framer-motion"

const FadeIn = (props) => {
    const delay = props.delay;
    const content = props.children;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay, duration: 0.5 }}
            viewport={{ once: true }}
        >
            {content}
        </motion.div>
    );
};

export default FadeIn;