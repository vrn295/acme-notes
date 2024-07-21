import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acme Notes",
  description: "Effortless note-taking, wherever you are.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Acme Notes" />
      <meta name="twitter:creator" content="Acme Notes" />
      <meta
        property="og:url"
        content="/images/hero-banner.webp"
      />
      <meta property="og:title" content="Acme Notes" />
      <meta
        property="og:description"
        content="Effortless note-taking, wherever you are."
      />
      <meta
        property="og:image"
        content="/images/hero-banner.webp"
      />
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
