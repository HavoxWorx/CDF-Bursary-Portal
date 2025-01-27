/* === What I want  === */
// Overall menu design for the website::::this should evolve soon into the account modal holder too. [El psy congroo]

// --------- Imports ---------- //
import { useMenu, useTheme } from '@/app/(atoms)/utility/component-states';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Theme from '@/app/(molecules)/toggles/theme';
import Nav from './content';
import Socials from '@/app/(molecules)/toggles/socials';

// --------- Imports ---------- //

// --------- Render ---------- //
/* === How I want it to look  === */
const menu = () => {
  const { menu }: any = useMenu();
  const { theme }: any = useTheme();
  const path = usePathname();
  const menuOptions = {
    '📜': {
      marginTop: '2dvh',
      marginLeft: '1.5dvw',

      borderRadius: '0.5ch',
      height: '85dvh',
      width: '97dvw',

      transition: { duration: 1.2, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },
    '🗞️': {
      marginTop: '95dvh',
      marginLeft: '97dvw',
      borderRadius: '0.1ch',

      height: '0.5ch',
      width: '0.5ch',

      transition: {
        duration: 1,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const Header = (): any => {
    return <header className="menu-header">{path}</header>;
  };

  return (
    /* === How I want it to behave  === */
    <motion.menu
      animate={menu ? '📜' : '🗞️'}
      initial="🗞️"
      variants={menuOptions}
      data-theme={theme ? 'while-its-light-out' : 'while-its-dark-outside'}
    >
      <AnimatePresence>{menu && <Header />}</AnimatePresence>
      <AnimatePresence>{menu && <Nav />}</AnimatePresence>
      {menu && (
        <footer className="menu-footer">
          <AnimatePresence>
            <Theme />
          </AnimatePresence>
          <Socials id={'menu'}/>
        </footer>
      )}
    </motion.menu>
  );
};

export default menu;

// --------- Render ---------- //
