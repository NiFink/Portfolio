import type { Metadata } from "next";
import AboutMePage from "../../views/AboutMePage/AboutMePage";

export const metadata: Metadata = {
  title: "About Me — Nils Fink",
};

export default function AboutMe() {
  return <AboutMePage />;
}
