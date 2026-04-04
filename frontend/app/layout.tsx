import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/ui/WhatsAppButton";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velvet Nails Studio",
  description: "Donde la belleza es arte. Experiencias de manicura de lujo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${raleway.className} bg-dark text-white antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}