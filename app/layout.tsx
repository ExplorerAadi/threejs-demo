import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { ThreeJSWrapper } from "./ThreeJSWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Playground",
  description: "A 3D playground using React Three Fiber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThreeJSWrapper>{children}</ThreeJSWrapper>
      </body>
    </html>
  );
}
