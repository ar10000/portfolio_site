import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - AI Tools & Automation Projects | Andrew Ryan",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

