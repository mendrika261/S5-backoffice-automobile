import type { Metadata } from 'next'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/css/demo.min.css";
import "./css/tabler-flags.css";
import "select2/dist/css/select2.min.css";
import "select2-bootstrap-theme/dist/select2-bootstrap.min.css";

import Script from "next/script";
import Toast from "@/app/(core)/ui/Toast";
import {PrimeReactProvider} from "primereact/api";

import PrimeConfig from "@/app/(core)/ui/PrimeConfig";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: 'Fiara Administration',
  description: 'Administration de Fiara',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primeConfig = {
    locale: 'fr',
    ripple: true,
  };

  return (
    <html lang="fr">
      <body>
          <Loading />
          <Script src={"https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/tabler.min.js"}
                  strategy="afterInteractive"/>
          <Script src={"https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/demo.min.js"}
                  strategy="afterInteractive"/>
          <Script src={"https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/demo-theme.min.js"}
                  strategy="afterInteractive"/>
          <Script src={"https://code.jquery.com/jquery-3.6.0.min.js"}
                  strategy="beforeInteractive"/>
          <Script src="/static/js/parsley/parsley.min.js" strategy="beforeInteractive"/>
          <Script src="/static/js/parsley/i18n/fr.js" strategy="afterInteractive"/>
          <Script src="/static/js/parsley/i18n/fr.extra.js" strategy="afterInteractive"/>
          <Script src={"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.min.js"}
                  strategy="afterInteractive"/>
            <Script src={"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/i18n/fr.min.js"}
                    strategy="afterInteractive"/>
          <Toast />

          <PrimeReactProvider value={primeConfig}>
              <PrimeConfig />
              {children}
          </PrimeReactProvider>

      </body>
    </html>
  )
}
