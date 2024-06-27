import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "2nd Rev Cars",
  description: "Supercar store for when a speed beauty needs a new rider",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
