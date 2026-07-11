import type { Metadata } from "next";
import LandingPage from "../../views/LandingPage/LandingPage";

export const metadata: Metadata = {
  title: "Contact — Nils Fink",
};

// Renders the landing page; LandingPage scrolls to the "Get in touch"
// section when the path is /contact.
export default function ContactPage() {
  return <LandingPage />;
}
