import { Roboto} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});



export const metadata = {
  title: "Online-Shopping",
  description: "Online Shopping in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={roboto.variable}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
