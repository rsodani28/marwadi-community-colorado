import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <div className={`${geist.className} ${geist.variable}`}>
      <Component {...pageProps} />
      <footer className="bg-white/80 backdrop-blur-sm border-t border-orange-200 text-center text-sm text-gray-600 py-6 mt-12">
        <div className="flex flex-col items-center gap-3">
          <div className="text-gray-700 font-semibold">Connect with us</div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="https://chat.whatsapp.com/Fc7QTC0j61U2e7zgSmgPzz"
              className="rounded-full border border-green-500 px-4 py-2 text-green-700 hover:bg-green-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join us on WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/marwaricommunityofcolorado?igsh=ajJoYmVjZGRvZzBn"
              className="rounded-full border border-pink-500 px-4 py-2 text-pink-700 hover:bg-pink-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/g/1G5tA4fHHa/"
              className="rounded-full border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on Facebook"
            >
              Facebook
            </a>
          </div>
          <p className="font-medium">
            © {new Date().getFullYear()} Marwadi Community of Colorado · Developed and Designed by Rishabh Sodani
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MyApp;
