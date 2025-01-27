/* === What I want  === */
// Overall footer component for the website, feat: the Back Button

// --------- Imports ---------- //
import Back from '@/app/(molecules)/back-button';
import { useMenu } from '@/app/(atoms)/utility/component-states';

import Socials from '@/app/(molecules)/toggles/socials';

// --------- Imports ---------- //

// --------- Render ---------- //

export default () => {
  const { menu }: any = useMenu();
  return (
    <footer id="main-footer">
      <>
        <section id="previous-page">
          <Back />
        </section>
        {/* {menu ? null : <Socials id={'main'} className={'socials'} />} */}
      </>
      <p id="copyright">
        Havoxworx&copy;. | Designed with &hearts; at BlerdCorps&trade;.
      </p>
    </footer>
  );
};

// --------- Render ---------- //
/* === How I want it to look  === */

/* === How I want it to behave  === */
