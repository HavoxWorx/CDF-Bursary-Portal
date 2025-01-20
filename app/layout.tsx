/* === What I want  === */
// Overall page layout excluding the body as I want the individual 'use client' components to be included seperately in the template file.


/* === How I want it to look  === */

// --------- Imports ---------- //

// Styling
import './layout.scss';

// --------- Imports ---------- //


// --------- Render ---------- //
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
// --------- Render ---------- //

