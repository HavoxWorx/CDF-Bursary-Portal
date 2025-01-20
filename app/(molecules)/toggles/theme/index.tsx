/* === What I want  === */
// A button / checkbox to toggle between the application's dark and the-sun modes.

import { useMenu, useTheme } from '@/app/(atoms)/utility/component-states';

// --------- Render ---------- //

export default function theme() {
  const { theme, toggleTheme }: any = useTheme();
  const { menu }: any = useMenu();

  const themeIcon = menu ? 'shape-of the-sun while-menu-open' : 'shape-of the-sun ';

  return (
    <label className="theme-toggle">
      {/* === How I want it to behave === */}
      <input
        title={'theme toggle'}
        type={'checkbox'}
        checked={theme}
        onChange={toggleTheme}
      />
      <span className={theme ? 'shape-of the-moon' : themeIcon}></span>
      <span className="rays">
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
      </span>
    </label>
  );
}

// --------- Render ---------- //

/* === How I want it to look  === */
