/* === What I want  === */
//A general header component for the webapp to host the logo and home/brend logo

// --------- Imports ---------- //
import { useTheme, useMenu } from '@/app/(atoms)/utility/component-states';
import Logo from '@/app/(molecules)/logo';
import MenuToggle from '@/app/(molecules)/toggles/menu';
import {  usePathname  } from 'next/navigation';


// --------- Imports ---------- //

// --------- Render ---------- //

const header = () => {
  const { theme }: any = useTheme();
  const { menu }: any = useMenu();
    const path = usePathname();

  return (
    <header
      id={theme ? 'while-its-light-out' : 'while-its-dark-outside'}
      className={menu ? 'while-menu-open' : 'while-menu-closed'}
    >
      <Logo />
      {menu ? <section className='breadcrumbs'>{path}</section> : null}
      <MenuToggle />
    </header>
  );
};

export default header;

// --------- Render ---------- //

/* === How I want it to behave  === */
