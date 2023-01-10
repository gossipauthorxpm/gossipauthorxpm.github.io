import React from "react";
import { motion } from "framer-motion"


class Footer extends React.Component {
    render() {
        return <motion.footer className={'footer'} initial={{ opacity: 0, scale: 0.5, textShadow: '-2px 0px 0px rgba(32, 60, 20, 1)' }}
                              whileInView={{ opacity: 1, scale: 1, textShadow: '-2px 0px 0px rgba(255, 0, 150, 1)'  }}
                              transition={{ duration: 1  }}>

            HTML5, CSS3, JAVASCRIPT : REACT, IMAGES : MidjourneyAI, DEPLOY: GitHub
        </motion.footer>
    }
}
export default Footer