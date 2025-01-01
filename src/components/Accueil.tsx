import React from 'react';
import { motion } from 'framer-motion';
import profil from "../images/profil2.jpg";

const Accueil: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="accueil"
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="profil-container"
        variants={itemVariants}
      >
        <img src={profil} alt="photo de profil" />
      </motion.div>
      <div className="accueil-container">
        <motion.div className="accueil-box" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>Karine</motion.h1>
          <motion.h1 variants={itemVariants}>Raspail</motion.h1>
          <motion.div 
            className="accueil-subtitle"
            variants={itemVariants}
          >
            Thérapeute en psychogénéalogie
          </motion.div>
          <motion.div 
            className="accueil-text"
            variants={itemVariants}
          >
            Les traumatismes, les secrets et les conflits vécus par vos
            ascendants conditionnent encore votre vie et celle de vos enfants.
            Il est encore temps de revisiter votre histoire familiale par une
            séance de psychogénéalogie brève pour découvrir vos liens ancestraux
            et identifier les problématiques familiales qui ont traversé le
            temps en attente de réparation.
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accueil;
