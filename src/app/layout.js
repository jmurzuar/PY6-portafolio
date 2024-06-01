import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en-es" suppressHydrationWarning>


      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>

    </html>
  );
}
