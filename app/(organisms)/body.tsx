'use client';

/* === What I want  === */
// The main body of the project content, we compartmentalize this so we can use the useTheme and useMenu from zustand component states, without hopefully having to submit everything to client components.

/* === How I want it to look  === */

// --------- Imports ---------- //
// State
import { useTheme, useMenu } from '@/app/(atoms)/utility/component-states';

import Menu from '@/app/(organisms)/menu';
import Footer from '@/app/(organisms)/footer';
import Header from './header';
import Content from './content';

// --------- Imports ---------- //

// --------- Render ---------- //

export default function body({ children }: { children: React.ReactNode }) {
  const { theme }: any = useTheme();
  return (
    <body
      className={theme ? 'light-theme' : 'dark-theme'}
      data-theme={theme ? '☀️' : '🌑'}
    >
      <Header />
      <Menu />
      <Content>{children}</Content>
      <Footer />
    </body>
  );
}

// --------- Render ---------- //
