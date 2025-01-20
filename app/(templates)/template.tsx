/* === What I want  === */
// Overall page template with body compartmentalization forneasier server component management.

/* === How I want it to look  === */

// --------- Imports ---------- //
import Body from '@/app/(organisms)/body';

// --------- Imports ---------- //

// --------- Render ---------- //

export default function Template({children}: { children: React.ReactNode }) {
  return (
    <Body>
      {children}
    </Body>
  );
}

// --------- Render ---------- //
