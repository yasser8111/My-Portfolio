import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScrollWrapper from "@/components/layout/SmoothScrollWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Yasser Bin Bishr | ياسر بن بشر",
    template: "%s | Yasser Bin Bishr",
  },
  description: "Frontend developer and UI/UX designer specializing in fast, accessible, and scalable web experiences.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Yasser Bin Bishr | ياسر بن بشر",
    description: "Frontend developer and UI/UX designer specializing in fast, accessible, and scalable web experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Yasser Bin Bishr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasser Bin Bishr | ياسر بن بشر",
    description: "Frontend developer and UI/UX designer specializing in fast, accessible, and scalable web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${plusJakartaSans.variable} ${cairo.variable} h-full antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <SmoothScrollWrapper>
            {children}
          </SmoothScrollWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
