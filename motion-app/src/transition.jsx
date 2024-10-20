import { motion } from "framer-motion";

const transition = (MVPComponent) => {
    return () => (
        <>
            <MVPComponent />
            <motion.div className="slide-in"
                initial={{ scaleY: 1, opacity: 0.1}}
                animate={{ scaleY: 0}}
                exit={{ scaleY: 1}}
                transition={{ duration: 1, ease: [2.22, 1, 0.4, 1]}}
            />

            <motion.div className="slide-out"
                initial={{ scaleY: 1}}
                animate={{ scaleY: 0, opacity: 0.5}}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.4, 1]}}
            />
        </>

    );
};

export default transition;