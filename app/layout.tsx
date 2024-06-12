import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";


const inter = Inter({ subsets: ["latin"] });
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { OnboardingContextProvider } from "@/context/context";
import StreamVideoProvider from '@/context/StreamClientProvider';

import { SessionProvider } from 'next-auth/react';
import { getServerSession } from "next-auth";

// import { ourFileRouter } from "~/app/api/uploadthing/core";


const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "afyatelemed",
      url: "https://afyatelemed.com",
    },
  ],

  creator: "afyatelemed",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@afyatelemed",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // manifest: `${siteConfig.url}/site.webmanifest`,
  manifest: "/manifest.json",

};

export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        <Providers>
          <OnboardingContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* <StreamVideoProvider session={session}> */}
              {children}
              {/* </StreamVideoProvider> */}
            </ThemeProvider>
          </OnboardingContextProvider>
        </Providers>
      </body>
    </html>
  );
}

/***
 * PWA Content:
 * https://www.youtube.com/watch?v=hBUhfi778G8
 * https://www.youtube.com/watch?v=kzJfiKQyD24
 * https://medium.com/@srivishnu.k90/create-pwa-with-django-in-10-minutes-with-no-package-dependencies-b419fcff9af4
 * https://medium.com/@srivishnu.k90/display-install-app-for-pwa-in-2-minutes-3f4cceea1be3
 * 
 * // https://www.pwabuilder.com/imageGenerator
 * 
 * /////////// https://www.youtube.com/watch?v=9AOf_uPMVpM/////////// MOST USEFUL
 * https://gist.github.com/prof3ssorSt3v3/4ae0c69283f4b555bceadcce3e62077e
 */