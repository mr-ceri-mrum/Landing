/**
 * Animation Utilities
 * 
 * Набор функций и вариантов анимаций для использования с Framer Motion
 * Централизованная конфигурация анимаций улучшает консистентность и упрощает поддержку
 */

/**
 * Стандартные варианты анимации для элементов, появляющихся при скролле
 */
export const fadeIn = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6 
    }
  }
};

/**
 * Варианты анимации для элементов, появляющихся слева
 */
export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

/**
 * Варианты анимации для элементов, появляющихся справа
 */
export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

/**
 * Варианты для контейнеров с анимированными дочерними элементами
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Варианты анимации для элементов внутри staggerContainer
 */
export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4 
    }
  }
};

/**
 * Варианты анимации для кнопок и интерактивных элементов
 */
export const buttonAnimation = {
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2 
    } 
  },
  tap: { 
    scale: 0.95 
  }
};

/**
 * Анимация отображения модальных окон
 */
export const modalAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

/**
 * Анимация прозрачного фона для модальных окон
 */
export const overlayAnimation = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.2 
    } 
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2 
    } 
  }
};
