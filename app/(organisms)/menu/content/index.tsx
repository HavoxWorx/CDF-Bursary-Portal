/* === What I want  === */
// overall content section for the navigation / content section of the menu...for now just nav links but next update we add auth

// --------- Imports ---------- //

// Dummy Data
import { motion } from 'framer-motion';
import { websiteLinks, dashboardLinks, footerLinks } from './dummyData';
import Link from 'next/link';
import { useMenu } from '@/app/(atoms)/utility/component-states';

// --------- Imports ---------- //

// --------- Render ---------- //

export default () => {
  const { menu, toggleMenu }: any = useMenu();

  
  const perspective = {
    initial: {
      opacity: 0,
      rotateY: 10,
      translateY: -10,
      translateX: 0,
    },
    enter: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
    },
  };
  return (
    /* === How I want it to behave  === */
    <section className="menu-content">
      <nav className="main-navigation">
        <section id="website-nav">
          {websiteLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className="linkContainer">
                <motion.nav
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link
                    passHref={true}
                    href={href}
                    onClick={() => {
                      toggleMenu(!menu);
                    }}
                  >
                    {title}
                  </Link>
                </motion.nav>
              </div>
            );
          })}
        </section>

        <section id="dashboards-nav">
          {' '}
          {dashboardLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.nav
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                <Link
                  href={href}
                  onClick={() => {
                    toggleMenu(!menu);
                  }}
                >
                  {title}
                </Link>
              </motion.nav>
            );
          })}{' '}
        </section>
        {/* {websiteLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.nav
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                passHref={true}
                  href={href}
                  onClick={() => {
                    toggleMenu(!menu);
                  }}
                >
                  {title}
                </Link>
              </motion.nav>
            </div>
          );
        })}
          

        {dashboardLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.nav
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              <Link
                href={href}
                onClick={() => {
                  toggleMenu(!menu);
                }}
              >
                {title}
              </Link>
            </motion.nav>
          );
        })} */}
      </nav>
    </section>
  );
};

// --------- Render ---------- //
