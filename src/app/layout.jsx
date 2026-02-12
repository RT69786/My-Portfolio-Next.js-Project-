import ContactModal from "./components/ContactModal1/ContactModal";
import { ContactProvider } from "../context/ContactContext";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";
import LoaderWrapper from "./components/Loader/LoaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ContactProvider>
          <LoaderWrapper />
          {children}
          <ContactModal />
        </ContactProvider>
      </body>
    </html>
  );
}
