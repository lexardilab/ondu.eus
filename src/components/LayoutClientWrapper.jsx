'use client';

import GoogleAnalytics from './GoogleAnalytics';
import CookieBanner from './CookieBanner';
import Navbar from './Navbar';

export default function LayoutClientWrapper({ lang, pages }) {
  return (
    <>
      <GoogleAnalytics />
      <CookieBanner lang={lang} />
      <Navbar lang={lang} pages={pages} />
    </>
  );
}
