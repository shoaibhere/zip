import CustomWebglMain from "@/pages/custom-home/CustomWebglMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Site - Portfolio WebGL Showcase",
  description: "Portfolio avec effets WebGL et menu du index",
};

export default function Home() {
  return (
    <CustomWebglMain />
  );
}
