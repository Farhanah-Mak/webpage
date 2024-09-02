import AuthProvider from "./context/AuthProvider";
import "./globals.css"
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filefetcher",
  description: "Fetch Files and Download",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <section className="background">
            <Image
              src="/logo.png"
              alt=""
              class="homepage_image_logo img_left"
              width={100}
              height={44}
            />
            {children}
            <Image
              src="/logo.png"
              alt=""
              class="homepage_image_logo img_right"
              width={100}
              height={44}
            />
          </section>
        </AuthProvider>
      </body>
    </html>
  );
}


