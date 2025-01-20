'use client';

import { useSocials } from '@/app/(atoms)/utility/component-states';
import Toggle from '../utility';
// import Logo from '../../logo';
import instagram from '@/public/icons/socials/instagram-2016-5.svg';
import facebook from '@/public/icons/socials/facebook-3-2.svg';
import tumblr from '@/public/icons/socials/tumblr-icon-1.svg';
import gmail from '@/public/icons/socials/official-gmail-icon-2020-.svg';
import linkedin from '@/public/icons/socials/linkedin-icon-1.svg';
import logo from '@/public/icons/socials/tiktok-1.svg';
import tiktokDark from '@/public/icons/socials/tiktok-icon-2.svg';
import twitter from '@/public/icons/socials/x-2.svg';

import Link from 'next/link';
import Image from 'next/image';

// === === === === === === == Render == === === === === === ===//

const socials = ({ id }: any) => {
  const { socials, toggleSocials }: any = useSocials();

  return (
    <nav id={'socials-toggle'} className={socials ? '😍 🥰' : '😍'}>
      <Toggle
        id={'😍'}
        title={'Menu Footer Socials'}
        purpose={toggleSocials}
        state={!socials}
      />
      {/* Social Svgs  */}
      <div className="😉">
        <figure>
          <Image
            src={logo}
            alt="brandMark"
            height={22}
            width={22}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* tumblr */}
      <div className="😉">
        <figure>
          {/* icon path */}
          <Image
            src={tumblr}
            alt="tumblr"
            height={22}
            width={22}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* Facebook  */}
      <div className="😉">
        <figure>
          <Image
            src={facebook}
            alt="facebook"
            height={22}
            width={22}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* Instagram  */}
      <div className="😉">
        <figure>
          <Image
            src={instagram}
            alt="Instagram"
            width={22} //automatically provided
            height={22} //automatically provided
            // blurDataURL="data:..." //automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* Twitter  */}
      <div className="😉">
        <figure>
          <Image
            src={twitter}
            alt="twitter"
            width={22} //automatically provided
            height={22} //automatically provided
            // blurDataURL="data:..." //automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* TikTok  */}
      <div className="😉">
        <figure>
          <Image
            src={tiktokDark}
            alt="tiktokDark"
            width={22} //automatically provided
            height={22} //automatically provided
            // blurDataURL="data:..." //automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* linkedIn  */}
      <div className="😉">
        <figure>
          <Image
            src={linkedin}
            alt="linkedin"
            width={22} //automatically provided
            height={22} //automatically provided
            // blurDataURL="data:..." //automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>
      {/* Gmail  */}
      <div className="😉">
        <figure>
          <Image
            src={gmail}
            alt="gmail"
            width={22} //automatically provided
            height={22} //automatically provided
            // blurDataURL="data:..." //automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </figure>
      </div>

      
      {/* Social Svgs  */}
      <svg className="goo" xmlns="http://www.w3.org/2200/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="16"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feComposite in2="shadow" in="goo" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </nav>
  );
};
export default socials;

// === === === === === === == Render == === === === === === ===//
