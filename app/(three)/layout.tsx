import { ReactNode } from "react";
import { ThreeJSWrapper } from "./ThreeJSWrapper";

export default function ThreeJSLayout({ children }: { children: ReactNode }) {
  return <ThreeJSWrapper>{children}</ThreeJSWrapper>;
}
