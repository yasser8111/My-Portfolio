import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/layout/SmoothScroll";

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
  title: "Yasser Bin Bishr | بروتوفوليو ياسر بن بشر",
  description: "Yasser Bin Bishr | بروتوفوليو ياسر بن بشر - Full Stack Developer and UI/UX Designer.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cairo.variable} h-full antialiased`}
    >
      <head>
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
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
