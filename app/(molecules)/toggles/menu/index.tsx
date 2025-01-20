/* === What I want  === */
// A button / checkbox to toggle between the application's dark and the-sun modes.

import { useMenu } from '@/app/(atoms)/utility/component-states';
import { motion } from 'framer-motion';

// --------- Render ---------- //

export default function menu() {
  const { menu, toggleMenu }: any = useMenu();
  return (
    <div className="menu-toggle">
      {/* === How I want it to behave === */}
      <motion.div
        className={'toggle'}
        animate={{ top: menu ? '-100%' : '0%' }}
        transition={{
          duration: 0.8,
          type: 'tween',
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div
          className={'🥢'}
          onClick={() => {
            toggleMenu();
          }}
        ></div>
        <div
          className={'🥢'}
          onClick={() => {
            toggleMenu();
          }}
        ></div>
      </motion.div>
    </div>
  );
}

// --------- Render ---------- //
