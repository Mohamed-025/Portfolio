import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "Portfolio of Mohamed Eid, a data analyst and front-end developer. Power BI, Excel, SQL, React and Next.js projects.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl + "/"),
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.role}`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "og.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.role}` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} | ${profile.role}`, description, images: ["og.png"] },
};

export const viewport: Viewport = { themeColor: "#080c18", colorScheme: "dark light" };

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.classList.toggle('dark',t!=='light')}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
