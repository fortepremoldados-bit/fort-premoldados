'use client';

import { useEffect, useState } from 'react';

const COOKIE_NAME = 'forte-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_NAME, 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_NAME, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[9999] w-[95%] max-w-5xl -translate-x-1/2 rounded-2xl bg-white shadow-2xl border border-gray-200">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            🍪
          </div>

          <div>

            <h3 className="text-lg font-bold text-gray-900">
              Utilizamos Cookies
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Utilizamos cookies para melhorar sua experiência de navegação,
              personalizar conteúdos e analisar o tráfego do nosso site.
              Ao clicar em <strong>"Aceitar"</strong>, você concorda com nossa
              utilização de cookies conforme nossa Política de Privacidade.
            </p>

          </div>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <button
            onClick={rejectCookies}
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Recusar
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-lg bg-[#d9781f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b95f0c]"
          >
            Aceitar Cookies
          </button>

        </div>

      </div>
    </div>
  );
}