import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <div className={geist.className}>
      <Component {...pageProps} />
      <footer className="bg-white/80 backdrop-blur-sm border-t border-orange-200 text-center text-sm text-gray-600 py-4 mt-12">
        <p className="font-medium">
          © {new Date().getFullYear()} Marwadi Community of Colorado · Developed by Rishabh Sodani
        </p>
      </footer>
    </div>
  );
};

export default MyApp;
