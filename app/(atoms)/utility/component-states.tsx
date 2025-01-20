/* === What I want  === */
// A project wide state controller that I can use without too much prop drilling into components and one that has an easy setup



/* === How I want it to behave  === */

// === === === === === === == Imports == === === === === === ===//

// Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// === === === === === === == Imports == === === === === === ===//

//


/* === How I want it to look  === */
// === === === === === === == Render == === === === === === ===//

//

// ==================== Theme =====================//
export const useTheme = create(
  persist(
    (set) => ({
      theme: true,
      toggleTheme: () => set((state: any) => ({ theme: !state.theme })),
    }),
    {
      name: 'theme', // name of the item in the storage (must be unique)
    }
  )
);
// ==================== Theme =====================//

//

// ==================== Menu =====================//
export const useMenu = create((set) => ({
  menu: false,
  toggleMenu: () => set((state: any) => ({ menu: !state.menu })),
}));

// ==================== Menu =====================//

//

// ==================== Socials =====================//
export const useSocials = create((set) => ({
  socials: false,
  toggleSocials: () => set((state: any) => ({ socials: !state.socials })),
}));

// ==================== Socials =====================//

//

// === === === === === === == Render == === === === === === ===//
