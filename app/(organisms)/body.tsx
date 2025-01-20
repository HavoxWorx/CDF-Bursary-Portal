'use client';

/* === What I want  === */
// The main body of the project content, we compartmentalize this so we can use the useTheme and useMenu from zustand component states, without hopefully having to submit everything to client components.

/* === How I want it to look  === */

// --------- Imports ---------- //
// State
import { useTheme, useMenu } from '@/app/(atoms)/utility/component-states';

import Menu from '@/app/(organisms)/menu';
import Back from '@/app/(molecules)/back-button';
import Header from './header';

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
      {children}
      <Back />
    </body>
  );
}

// --------- Render ---------- //
