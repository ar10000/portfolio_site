import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Hire an AI Solutions Developer | Andrew Ryan",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

